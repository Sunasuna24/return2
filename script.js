const button = document.getElementById('button');
button.addEventListener('click', function () {
    let values = フォームの値を取得する(document);
    let 日付 = values.date;
    let 人数 = values.number;
    let 年齢 = values.age;
    let クーポンの有無 = values.hasCoupon;

    let 単価 = 一人当たりのチケット料金を算出する(年齢);
    console.log(単価);  // ここで一人当たりの単価が正しく取得できていることを確認する。

    let 全体のチケット代 = 全体のチケット代を計算する(単価, 人数);
    console.log(全体のチケット代);  //ここで全体のチケット代が正しく計算できていることを確認する。

    let クーポンを考慮した全体のチケット代 = クーポンを適用する(全体のチケット代, クーポンの有無);
    console.log(クーポンを考慮した全体のチケット代);    // ここでクーポンを考慮した全体のチケット代が正しく計算できているかを確認する。

    let ラッキー7を考慮した全体のチケット代 = ラッキー7を適用する(日付, クーポンを考慮した全体のチケット代);
    console.log(ラッキー7を考慮した全体のチケット代);   // ここでラッキー7を考慮した全体のチケット代が正しく計算できているかを確認する。

    let displayPrice = document.getElementById('totalPrice');
    displayPrice.innerText = ラッキー7を考慮した全体のチケット代;
});


/**
 * 【課題1】入力された年齢に応じた一人当たりのチケット料金を算出せよ。
 * 
 * 一人当たりのチケット料金を算出する関数
 * 
 * 15歳以下は¥600
 * 16歳以上、59歳以下は¥1,000
 * 60歳以上は¥800
 */
function 一人当たりのチケット料金を算出する(age) {
    // ここに処理を書く。
    // 一人当たりのチケット料金は「price」と言う変数を用いよ

    return price;
}

/**
 * 【課題2】全体のチケット代を求めよ。
 * 
 * 全体のチケット代を算出する関数
 * 
 * 全体のチケット代は「人数 x チケット料金」でもとまる。
 * ただし、人数が10人を超えている場合は一人当たりのチケット代が1割引になる
 */
function 全体のチケット代を計算する(unitPrice, number) {
    // ここに処理を書く。
    // 全体のチケット代は「totalPrice」という変数を用いよ

    return totalPrice;
}

/**
 * 【課題3】クーポンを適用したチケット代を求めよ。
 * 
 * クーポンを適用したチケット代を求める関数
 * 
 * クーポンを持っている場合は、¥1,000引きする
 * ただし、クーポン適用後のチケット代金が¥0を下回る場合、チケット代は¥0とする。
 */
function クーポンを適用する(price, hasCoupon) {
    // ここに処理を書く。
    // クーポン適用後のチケット代は「couponPrice」という変数を用いよ。

    return couponPrice;
}

/**
 * 【課題4】ラッキー7を適用したチケット代を求めよ。
 * 
 * ラッキー7を適用したチケット代を求める関数
 * 
 * 来場する日付の各桁の和を7で割った余りが0だった場合、全体のチケット代金から7割引する。
 * 例①：来場日が「2015-09-22」だった場合、各桁の和は「2+0+1+5+0+9+2+2」で21。21を7で割った余りは0なので、2015-09-22はラッキー7の日。
 * 例②：現時点でのチケット代が¥1,000でもしラッキー7の日に当たった場合、7割引なので¥300で入場できる。
 * 例③：2015年9月22日に来場する人のラッキー7考慮前の料金が¥1,000だった場合、チケット代は最終的には¥300になる。
 */
function ラッキー7を適用する(price, date) {
    // ここに処理を書く
    // ラッキー7処理後のチケット代は「totalPrice」という変数を用いよ。

    return totalPrice;
}

/**
 * それぞれのinputの値を取得する関数
 * ここは触らない。
 */
function フォームの値を取得する(document) {
    let date = document.getElementById('date').value;
    let number = document.getElementById('number').value;
    let ages = document.getElementsByName('age');
    for (var age = "", i = ages.length; i--;) {
        if (ages[i].checked) {
            var age = ages[i].value ;
            break ;
        }
    }

    let coupon = document.getElementById('coupon').value;
    let hasCoupon = coupon == "on" ? true : false;

    let values = {
        'date': date,
        'number': number,
        'age': age,
        'hasCoupon': hasCoupon,
    }

    return values;
}