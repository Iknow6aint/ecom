const layout = require("../layout");

module.exports = ({product }) =>{
    return layout({
        content:`
        <form>
            <input name="title" value = "${product.title}"/>
            <input name ="price" value="${product.price}"/>
            <button>Submit</button>
        </form>
       
        `
    });
}