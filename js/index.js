var Sex_selection = document.getElementsByName('Sex'),
    basics = document.getElementsByClassName('basics')[0],
    answer = document.getElementsByClassName('answer')[0],
    motion=document.getElementsByClassName('motion')[0].children,
    data=document.getElementsByClassName('text')[0].children;
    
function int(){
    for(var i  = 0; i < Sex_selection.length; i ++){
        Sex_selection[i].index = i;
        Sex_selection[i].onclick = function(){
            if(this.index == 0){
                if(data[0].value != '' && data[1].value != '' && data[2].value != ''){
                    basics.value = 67 + 13.73 * Number(data[0].value) + 5 * Number(data[1].value) - 6.9 * Number(data[2].value);
                }else{
                    alert('请输入完整的，体重(kg)-身高(cm)-年龄(周岁)')
                }

            }else if(this.index == 1){
                if(data[0].value != '' && data[1].value != '' && data[2].value != ''){
                    661 + 9.6 * Number(data[0].value) + 1.72 * Number(data[1].value) - 4.7 * Number(data[2].value);
                }else{
                    alert('请输入完整的，体重(kg)-身高(cm)-年龄(周岁)')
                }
            }
        }
    }
    for(var j = 0; j < motion.length; j ++){
        motion[j].index = j;
        console.log(this.index)
        motion[j].onclick = function(){
            if(this.index == 0){
                console.log(this.index)
                answer.textContent=parseFloat(basics.value*1.15).toFixed(3)+'kcal'
            }else if(this.index == 2){
                    console.log(this.index)
                    answer.textContent=parseFloat(basics.value*1.3).toFixed(3)+'kcal'
            }else if(this.index == 4){
                console.log(this.index)
                answer.textContent=parseFloat(basics.value*1.4).toFixed(3)+'kcal'
            }else if(this.index == 6){
                console.log(this.index)
                answer.textContent=parseFloat(basics.value*1.6).toFixed(3)+'kcal'
            }else if(this.index == 8){
                console.log(this.index)
                answer.textContent=parseFloat(basics.value*1.8).toFixed(3)+'kcal'
            }
             
        }
    }
    
}
int();

