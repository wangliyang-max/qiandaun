function renderHTML(url){
    switch(url){
        case "/home":
            return `
            <html>
                <b>hello world</b>
                <div>大家好，我是home</div>
            </html>
            `
        case "/list":
            return `
            <html>
                <b>hello world</b>
                <div>大家好，我是list</div>
            </html>
            `
        default:
             return `
            <html>
                <b>hello world</b>
                <div>404 not found</div>
            </html>
            `
   }
}
exports.renderHTML = renderHTML