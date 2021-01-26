class AspectUtil {

    static getAspectContext(current_context){
        if(current_context.$parent !== undefined){
            if(current_context.$parent._name === "<Aspect>"){
                return current_context.$parent;
            }else{
                return this.getAspectContext(current_context.$parent);
            }
        }else{
            return null;
        }
    }

    static convertSlotToString(elements){
        let html = "";
        for(let i = 0; i < elements.length; i++){
            let element = elements[i];
            if(element.tag !== undefined){
                html += "<" + element.tag;

                if(element.data !== undefined && element.data.attrs !== undefined){
                    for(let attribute in element.data.attrs){
                        html += " " + attribute + "=\"" + element.data.attrs[attribute] + "\"";
                    }
                }

                html += ">";
                if(element.children !== undefined && element.children.length > 0){
                    html += this.buildSlot(element.children);
                }
                html += "</" + element.tag + ">";
            }else if(element.text !== undefined){
                html += element.text;
            }
        }
        return html;
    }

}

module.exports = AspectUtil;