window.onload = function() {
        //分享设置
        $(".blog-content ").prepend($("input[name='data' ] ").val());
        window._bd_share_config = {
            common: {
                bdSign: "on ",
                bdText: $("input[name='sharedata' ]").val(),
                bdUrl: 'http://www.gshll.com',
                bdPic: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=cf&step_word=&hs=0&pn=0&spn=0&di=38372681711&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1156975305%2C245521243&os=3230066542%2C2434990000&simid=4067235628%2C610197576&adpicid=0&lpn=0&ln=1989&fr=&fmq=1499083032936_R&fm=index&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1207%2F1406%2Fbizhi-1406-80399.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fgt7p7h7_z%26e3Bv54AzdH3FktzitAzdH3F15og-80lm9n-d_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'
            },
            share: [{
                "tag ": "share_1",
                "bdSize ": 16
            }],
            slide: [{
                bdImg: 0,
                bdPos: "right",
                bdTop: 100
            }],
            image: [{
                viewType: 'list',
                viewPos: 'top',
                viewColor: 'black',
                viewSize: '16',
                viewList: ['qzone', 'sqq', 'tsina', 'tieba', 'tqq', 'ty', 'weixin']
            }],
            selectShare: [{
                "bdselectMiniList ": ['qzone', 'sqq', 'tsina', 'tieba', 'tqq', 'ty', 'weixin']
            }]
        }
        with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
    }
    /*
    提交引用
    */
$(".quotebtn").click(function() {
    var quote = $(this).parent().parent();
    //获取作者标题
    var quoteuser = quote.children(".comment-header ").text().trim();
    var quotecont = quote.children(".comment-content").children(".blogcomment").contents().filter(function() {
        return this.nodeType === 3;
    }).text().trim(); //获取文本节点
    var quoteall = `<div class='comment commentquo'>\n\t<p>回复了${quoteuser}</p>\n\t<blockquote>${quotecont}</blockquote>\n</div>\n`;
    $("textarea[name='content']").val(quoteall);

})

/*
提交评论
*/
$("#btn").click(function() {

    $.ajax({
        url: "/api/user/comment",
        type: "post",
        data: {
            username: $("input[name='username'").val(),
            email: $("input[name='email']").val(),
            content: $("textarea[name='content']").val(),
            blogid: $("input[name='blogid']").val()
        },
        success: function(_data) {
            //alert(_data);
            window.location.href = "/blog/reading?id=" + $(" input[name='blogid']").val() + "#" + _data;
            window.location.reload();
        }
    })
})