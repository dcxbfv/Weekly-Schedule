function week(){
    // HTML
    let b1 = document.querySelector("#b1");
    let b2 = document.querySelector("#b2");
    let b3 = document.querySelector("#b3");
    let di = document.querySelector("#dayinp").value;

    // شنبه
    if (di === "0"){
        b1.innerHTML = "کار و فناوری";
        b2.innerHTML = "عربی";
        b3.innerHTML = "هنر";

    // یکشنبه
    }else if (di === "1"){
        b1.innerHTML = "فارسی";
        b2.innerHTML = "معارف";
        b3.innerHTML = "ریاضی";

        // دوشنبه
    }else if (di === "2"){
        b1.innerHTML = "املا و انشا";
        b2.innerHTML = "مطالعات(ظهر) علوم(صبح)";
        b3.innerHTML = "علوم";

        //سه شنبه
    }else if (di === "3"){
        b1.innerHTML = "قرآن";
        b2.innerHTML = "ریاضی";
        b3.innerHTML = "تفکر";

        //چهارشنبه
    }else if (di === "4"){
        b1.innerHTML = "ورزش";
        b2.innerHTML = "مطالعات";
        b3.innerHTML = "زبان";

        //روز اشتباه 
    }else {
        b1.innerHTML = "یک روز را وارد کنید";
        b2.innerHTML = "یک روز را وارد کنید";
        b3.innerHTML = "یک روز را وارد کنید";
    }
}