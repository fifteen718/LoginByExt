Ext.onReady(function () {

    //  创建“登录”面板
    var loginPanel = new Ext.Panel({
        //  设置面板的位置、宽高、样式
        //  注意：此处我用的是相对布局relative（用于比较两者的区别）
        id: 'loginPan',
        x: 363,
        y: 0,
        width: 396,
        height: 480,
        baseCls: '',
        defaults: {
            border: false
        },
        //  添加面板里面的物品
        items: [
            {
                //  第一件：logo图
                id: 'loginLogo',
                height: 160,
                frame: false,
                bodyStyle: 'padding-top:10px',
                html: '<img src="images/fly_icon.png">'
            },
            {
                //  第二件：登录的表单
                id: 'loginForm',
                defaultType: 'textfield',
                frame: false,
                defaults: {
                    allowBlank: false
                },
                //  添加表单里面的物品：两个输入框
                items: [
                    {
                        id: "username",
                        cls: "text_field",
                        inoutType: 'text',
                        width: 330,
                        height: 28,
                        blankText: '账号不能为空',
                        emptyText: '请输入账号',
                    },
                    {
                        id: "password",
                        cls: "text_field",
                        inputType: 'password',
                        width: 330,
                        height: 28,
                        emptyText: '请输入密码',
                        blankText: '密码不能为空',
                    }]
            },
            {
                //  第三件：忘记密码
                id: 'loginForget',
                html: "<a href='forget_pwd.html'  target='_blank'>忘记密码？</a>",
            },
            {
                //  第四件：登录按钮
                id: 'loginBtn',
                html: '<button id="btn_login">马上登录</button>',
            }
        ],
    });

    //  创建“注册”面板
    var registerPanel = new Ext.Panel({
        //  设置面板的位置、宽高、样式
        //  注意：此处我用的是绝对布局absolute（用于比较两者的区别）
        id: 'registerPan',
        x: 0,
        y: 46,
        width: 800,
        height: 389,
        baseCls: '',
        layout: 'absolute',
        defaults: {
            border: false
        },
        //  添加面板里面的物品
        items: [
            {
                //  第一件：标题
                id: 'registerTitleLabel',
                xtype: 'label',
                x: 47,
                y: 50,
                text: '还没有账号？',
            }, {
                //  第二件：正文
                id: 'registerContentLabel',
                xtype: 'label',
                x: 47,
                y: 135,
                text: '这是在注册面板下面的正文内容。里面的内容可以随便写，比如当前我们再一个窗口下面建立了两个面板。而两个面板的布局是分别用相对布局和绝对布局来实现的。相比较而言，我觉得用绝对布局会简单粗暴，更直接，更方便。总之，你们自己体会一下吧。',
            }, {
                //  第三件：注册按钮
                id: 'registerBtn',
                xtype: 'button',
                x: 47,
                y: 280,
                html: '<button id="btn_register" >马上注册</button>'
            }],

    });

    // 创建窗口，从而让内容达到居中效果
    var centerWindow = new Ext.Window({
        baseCls: '',
        width: 800,
        height: 480,
        layout: 'absolute',
        closable: false,
        draggable: false,
        resizable: false,
        shadow: false,
        border: false,
        items: [registerPanel, loginPanel],
    });

    //  显示窗口
    centerWindow.show();

    //  添加浏览器缩放自动居中效果
    Ext.EventManager.onWindowResize(function () {
        centerWindow.center();
    });
});

