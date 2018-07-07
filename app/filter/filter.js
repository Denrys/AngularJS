app.filter("sexFilter",function(){
    return function(val){
        var  pos = "未知";
        switch(val){
            case "M":
                 pos = "男";
                break;
                case "W":
                pos = "女";
                break;
            default:
                break;
        }
        return pos;
    }
});

app.filter("ballFilter",function(){
    return function(val){
        var  pos = "未知";
        switch(val){
            case "L":
                 pos = "篮球";
                break;
                case "W":
                pos = "网球";
                 break;
                case "P":
                pos = "排球";
                 break;
                case "Z":
                pos = "足球";
                 break;
                case "B":
                pos = "保龄球";
                break;
            default:
                break;
        }
        return pos;
    }
})