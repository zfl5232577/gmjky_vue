import MD5 from 'js-md5';

var Utils = {
    TOKEN:"52e6f0db23ce0f15a0b5a48796d0851a6c3a5110b55b3ceddd572daaf57f779f",
    getSign: function (map) {
        var arrayObj = Array.from(map);
        arrayObj.sort(function (a, b) {
            if (a[0]>b[0]){
                return 1;
            } else  if (a[0]<b[0]){
                return -1;
            }else {
                return 0;
            }
        });
        var result="";
        arrayObj.forEach((item) => {
            result += (item[0] + item[1]);
        });
        return MD5(MD5(result).toUpperCase()+this.TOKEN).toUpperCase();
    }
};

export default Utils