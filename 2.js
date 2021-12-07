function countDiscount(type, money) {

    let moneyDiscount;
    let discount;

    if (type === "DumbWaysJos") {
        discount = 0.211;
        if (money >= 50000) {
            moneyDiscount = discount * money;//21100
            if (moneyDiscount >= 20000) {
                moneyDiscount = 20000;
            }

        }
        let pay = money - moneyDiscount;
        console.log(`bayar ${pay}`);
        console.log((`discount ${moneyDiscount}`));
        let returnMoney = money - pay;
        console.log(`return money ${returnMoney}`);
    }

    if (type === "DumbWaysMantap") {
        discount = 0.30;
        if (money >= 80000) {
            moneyDiscount = discount * money;
            if (moneyDiscount >= 40000) {
                moneyDiscount = 40000;
            }
        }
        let pay = money - moneyDiscount;
        console.log(`bayar ${pay}`);
        console.log((`discount ${moneyDiscount}`));
        let returnMoney = money - pay;
        console.log(`return money ${returnMoney}`);
    }

}

countDiscount("DumbWaysMantap", 200000);
