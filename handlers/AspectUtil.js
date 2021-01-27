const INLINE_ELEMENTS = {
    TEXT_EDITOR: 0,
    BUTTON_EDITOR: 1
}

const INLINE_ELEMENT_TAGS = [
    '<AspectTextEditor>',
    '<AspectButtonEditor>'
];

class AspectUtil {

    static get INLINE_ELEMENTS(){
        return INLINE_ELEMENTS;
    }

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
                    html += this.convertSlotToString(element.children);
                }
                html += "</" + element.tag + ">";
            }else if(element.text !== undefined){
                html += element.text;
            }
        }
        return html;
    }

    static getInlineElementData(context){
        let inline_elements = findElementsInContext(context, INLINE_ELEMENT_TAGS);

        const data = [];

        for(let i = 0; i < inline_elements.length; i++){
            let inline_element_context = inline_elements[i];
            let data_package = {
                type: inline_element_context.aspect_type,
                data: inline_element_context.getData()
            };
            data.push(data_package);
        }

        return data;
    }

}

function findElementsInContext(context, tags){
    let found_contexts = [];

    if(tags.includes(context._name)){
        found_contexts.push(context);
    }

    if(context.$children !== undefined && context.$children.length > 0){
        for(let i = 0; i < context.$children.length; i++){
            let returned_contexts = findElementsInContext(context.$children[i], tags);
            for(let x = 0; x < returned_contexts.length; x++){
                found_contexts.push(returned_contexts[x]);
            }
        }
    }

    return found_contexts;
}

module.exports = AspectUtil;