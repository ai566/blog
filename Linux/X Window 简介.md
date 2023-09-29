# X Window 简介
从英文字母看，X在W（Window）后面，所有称为X，有下一代窗口之意。在Unix-like上的图形用户接口（GUI）被称为X或X11。X11只是一个软件而不是操作系统。
X Window分为X Server和X Client两个组件。X Server管理硬件，X Client管理应用程序。
由于每个X Clinet是独立的，并不知道其它的X Clinet，这样就会造成GUI界面的显示冲突，所以使用X Window Manager进行管理。X Window Manger，也叫窗口管理器，是一个特殊的X Client，负责管理所有的应用程序GUI。著名的X Window Manager有GNOME、KDE。
随着技术的发展，X Window窗口管理系统正逐步被淘汰，而被新一代图形界面管理系统——Wayland取代。
