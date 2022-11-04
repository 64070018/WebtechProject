let showMenu = document.querySelector('.contain');
function addToCart(value) {
    showMenu.innerHTML = "";

    products.forEach((product) => {
        if (product.id == value) {
            showMenu.innerHTML += `
                <div class="container">
                    <div class="picmenu">
                        <!-- left container -->
                        <img src="${product.img}" width="70%">
                        <br>
                        <label for="name">${product.menu}</label>
                        <br><br>
                        <label for="detail">${product.description}</label>
                    </div>
                    <div class="optionmain">
                        <!-- right container -->
                        แป้งเครป
                        <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" onclick="swax(1)" width="20px" align="right" id="drop1" class="dropdown">
                        <hr>
                        <div id="flour">
                            <input type="checkbox" class="form-check-input">วนิลา<br>
                            <input type="checkbox" class="form-check-input">ชาโคล<br>
                            <input type="checkbox" class="form-check-input">ทูโทน<br>
                        </div>`

            if (value <= 15) {
                //crap
                showMenu.innerHTML += `
                        <br>
                        ท้อปปิ้ง
                        <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                        <hr>
                        <div id="topping">
                            <input type="checkbox" class="form-check-input">carpppp<br>
                            <input type="checkbox" class="form-check-input">carpppp<br>
                            <input type="checkbox" class="form-check-input">carpppp<br>
                            <input type="checkbox" class="form-check-input">carpppp<br>
                        </div>
                        <div id="count">
                            <br>
                            จำนวน
                        </div>
                        <div id="add">
                            <button class="bt" onclick="add()">เพิ่ม</button>
                        </div>
                    </div>
                </div>

                        }
            `;
            } else if (value <= 20) {
                // combo set
                showMenu.innerHTML += `
                        <br>
                        ท้อปปิ้ง
                        <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                        <hr>
                        <div id="topping">
                            <input type="checkbox" class="form-check-input">combooo<br>
                            <input type="checkbox" class="form-check-input">combooo<br>
                            <input type="checkbox" class="form-check-input">combooo<br>
                            <input type="checkbox" class="form-check-input">combooo<br>
                        </div>
                        <div id="count">
                            <br>
                            จำนวน
                        </div>
                        <div id="add">
                            <button class="bt" onclick="add()">เพิ่ม</button>
                        </div>
                    </div>
                </div>

                        }
            `;

            } else if (value <= 30) {
                // beverage
                showMenu.innerHTML += `
                <br>
                ท้อปปิ้ง
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                <hr>
                <div id="topping">
                    <input type="checkbox" class="form-check-input">drinkkkkkkk<br>
                    <input type="checkbox" class="form-check-input">drinkkkkkkk<br>
                    <input type="checkbox" class="form-check-input">drinkkkkkkk<br>
                    <input type="checkbox" class="form-check-input">drinkkkkkkk<br>
                </div>
                <div id="count">
                    <br>
                    จำนวน
                </div>
                <div id="add">
                    <button class="bt" onclick="add()">เพิ่ม</button>
                </div>
            </div>
        </div>

                }
    `;

            } else {
                // tokyo
                showMenu.innerHTML += `
                <br>
                ท้อปปิ้ง
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                <hr>
                <div id="topping">
                    <input type="checkbox" class="form-check-input">tokyooo <br>
                    <input type="checkbox" class="form-check-input">tokyooo <br>
                    <input type="checkbox" class="form-check-input">tokyooo <br>
                    <input type="checkbox" class="form-check-input">tokyooo <br>
                </div>
                <div id="count">
                    <br>
                    จำนวน
                </div>
                <div id="add">
                    <button class="bt" onclick="add()">เพิ่ม</button>
                </div>
            </div>
        </div>

                }
    `;

            }
        }

    })
}



// ไม่ได้ใช้

