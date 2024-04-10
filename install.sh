#!/bin/bash

# 获取最新的发行版标签
latest_release=$(curl --silent "https://api.github.com/repos/gooaclok819/sublinkX/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

# 检测机器类型
machine_type=$(uname -m)

if [ "$machine_type" = "x86_64" ]; then
    file_name="sublink_amd64"
elif [ "$machine_type" = "aarch64" ]; then
    file_name="sublink_arm64"
else
    echo "不支持的机器类型: $machine_type"
    exit 1
fi

# 下载文件
curl -LO "https://github.com/gooaclok819/sublinkX/releases/download/$latest_release/$file_name"

# 设置文件为可执行
chmod +x $file_name

# 移动文件到/usr/local/bin
sudo mv $file_name /usr/local/bin/sublink

# 创建systemctl服务
echo "[Unit]
Description=Sublink Service

[Service]
ExecStart=/usr/local/bin/sublink

[Install]
WantedBy=multi-user.target" | sudo tee /etc/systemd/system/sublink.service

# 启动并启用服务
sudo systemctl start sublink
sudo systemctl enable sublink

echo "安装完成已经启动输入sublink可以呼出菜单"

# 设置一个系统变量
echo "alias sublink='/usr/local/bin/sublink_menu'" >> ~/.bashrc

# 创建sublink_menu.sh脚本
echo '#!/bin/bash

while true; do
    # 获取服务状态
    status=$(systemctl is-active sublink)

    echo "当前运行状态: $status"
    echo "1. 启动服务"
    echo "2. 停止服务"
    echo "3. 查看服务状态"
    echo "4. 退出"
    echo -n "请选择一个选项: "
    read option

    case $option in
        1)
            sudo systemctl start sublink
            systemctl daemon-reload
            ;;
        2)
		        systemctl stop sublink
		        systemctl disable sublink
		        rm /etc/systemd/system/sublink.service
		        systemctl daemon-reload
		        rm  /usr/local/bin/sublink_menu
		        rm /usr/local/bin/sublink
		        unalias sublink
            ;;
        3)
            systemctl status sublink
            ;;
        4)
            exit 0
            ;;
        *)
            echo "无效的选项"
            ;;
    esac
done' > sublink_menu.sh

# 设置sublink_menu.sh为可执行
chmod +x sublink_menu.sh

# 移动sublink_menu.sh到/usr/local/bin

sudo mv sublink_menu.sh /usr/local/bin/sublink_menu

echo "请在当前 shell 中执行以下命令来启用别名："
echo "source ~/.bashrc"
