$(function () {
    $("img.lazy").lazyload();
});

window.onload = function() {
    const styleTitle1 = "font-size: 22px;font-weight: bold;color: rgb(0,0,139);font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;";
    const styleTitle2 = "font-size: 12px;color: rgb(0,0,139);font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;";
    const styleContent = "color: rgb(138,43,226);";
    const title1 = "Crestekk Team EPG System for PHP.";
    const title2 = `

╔═╗╦═╗╔═╗╔═╗╔╦╗╔═╗╦╔═╦╔═  ╔═╗╔═╗╔═╗
║  ╠╦╝║╣ ╚═╗ ║ ║╣ ╠╩╗╠╩╗  ║╣ ╠═╝║ ╦
╚═╝╩╚═╚═╝╚═╝ ╩ ╚═╝╩ ╩╩ ╩  ╚═╝╩  ╚═╝


███╗   ███╗██╗  ██╗██████╗ ██╗   ██╗███████╗ █████╗ ██╗  ██╗
████╗ ████║╚██╗██╔╝██╔══██╗╚██╗ ██╔╝██╔════╝██╔══██╗██║  ██║
██╔████╔██║ ╚███╔╝ ██║  ██║ ╚████╔╝ █████╗  ███████║███████║
██║╚██╔╝██║ ██╔██╗ ██║  ██║  ╚██╔╝  ██╔══╝  ██╔══██║██╔══██║
██║ ╚═╝ ██║██╔╝ ██╗██████╔╝   ██║   ███████╗██║  ██║██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
                                                            
                                                            
`;
    const content = `\n\n版本: V3.0 \n主页: https://www.mxdyeah.top/ \nGithub: https://github.com/mxdabc/epgphp`;
    console.info(`%c${title1} %c${title2} %c${content}`, styleTitle1, styleTitle2, styleContent);
}
