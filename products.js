const products =  [
    {
     "id": 1,
     "category": "เครป",
     "menu": "แฮม-ไส้กรอก-หมูหยอง",
     "description": "แฮม-ไส้กรอก-หมูหยอง",
     "price": 40,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022031112404803261/detail/menueditor_item_265e7531d39043988cf5be860a1a9e0c_1647002406907814200.webp"
    },
    {
     "id": 2,
     "category": "เครป",
     "menu": "ช็อกโกแลต-กล้วย-ฝอยทอง",
     "description": "ช็อกโกแลต-กล้วย-ฝอยทอง",
     "price": 45,
     "img": "https://cdn.discordapp.com/attachments/1019574801557364837/1029762938388615228/unknown.png"
    },
    {
     "id": 3,
     "category": "เครป",
     "menu": "ไข่-ปููอัด-หมูสับ",
     "description": "ไข่-ปููอัด-หมูสับ",
     "price": 40,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021122216362687369/detail/menueditor_item_db131886b50b43c5baf001323c0b9071_1640190980303307200.webp"
    },
    {
     "id": 4,
     "category": "เครป",
     "menu": "พิซซ่า-ปูอัด",
     "description": "พิซซ่า-ปูอัด",
     "price": 35,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021122215274275935/detail/menueditor_item_b789cfc0c0814fc28dfc3486fd02030e_1640186831335813652.webp"
    },
    {
     "id": 5,
     "category": "เครป",
     "menu": "ไส้กรอก-ปูอัด",
     "description": "ไส้กรอก-ปูอัด",
     "price": 30,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020090212542478046/detail/menueditor_item_80fdcc061a854aa59b9ab85db3df8f06_1599051213625591595.webp"
    },
    {
     "category": "เครป",
     "menu": "ไข่-ปูอัด-ไส้กรอก-หมูหยอง",
     "description": "ไข่-ปูอัด-ไส้กรอก-หมูหยอง",
     "price": 45,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022091718152957985/detail/menueditor_item_a0296ec077a14f4e8174da18c1cf2eac_1663438457105229332.webp"
    },
    {
     "category": "เครป",
     "menu": "เนย-นม-กล้วยหอม",
     "description": "เนย-นม-กล้วยหอม",
     "price": 40,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020111207013363012/detail/menueditor_item_c16dd467fa464fc4ba77e0dbd93cd8d2_1663526677840801196.webp"
    },
    {
     "category": "เครป",
     "menu": "พริกเผา-แฮม-หมูหยอง",
     "description": "พริกเผา-แฮม-หมูหยอง",
     "price": 35,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020040805081178009/detail/menueditor_item_02f09ed378e04c9589e766bb73090d63_1586341244912694154.webp"
    },
    {
     "category": "เครป",
     "menu": "เนย-นม-ซีเรียล",
     "description": "เนย-นม-ซีเรียล",
     "price": 20,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021111419072529491/detail/menueditor_item_c17ef5dba18448dca24a5d0751c467c1_1636916828914995822.webp"
    },
    {
     "category": "เครป",
     "menu": "พริกเผา-ปูอัด",
     "description": "พริกเผา-ปูอัด",
     "price": 30,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021031803482566478/detail/menueditor_item_a22014d3815946b4a55975bf0c98d906_1641747319859696342.webp"
    },
    {
     "category": "เครป",
     "menu": "ผักโขม-แฮม-ไข่ดาว",
     "description": "ผักโขม-แฮม-ไข่ดาว",
     "price": 40,
     "img": "https://cdn.discordapp.com/attachments/1019574801557364837/1029763186473316462/unknown.png"
    },
    {
     "category": "เครป",
     "menu": "พริกเผา-หมูหยอง-สาหร่าย",
     "description": "พริกเผา-หมูหยอง-สาหร่าย",
     "price": 40,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020090406121780074/detail/menueditor_item_8e90b4d2b8c948f5a6618007da038546_1663442898068717220.webp"
    },
    {
     "category": "เครป",
     "menu": "เนย-นม-น้ำตาล",
     "description": "เนย-นม-น้ำตาล",
     "price": 25,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2020050312050143862/detail/menueditor_item_27ff375e018c4609a5f38c3cc8eee3fe_1663443576247584461.webp"
    },
    {
     "category": "เครป",
     "menu": "พริกเผา-แฮม-หมูหยอง",
     "description": "พริกเผา-แฮม-หมูหยอง",
     "price": 35,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022031112404803261/detail/menueditor_item_265e7531d39043988cf5be860a1a9e0c_1647002406907814200.webp"
    },
    {
     "category": "เครป",
     "menu": "ไข่-แฮม-ไส้กรอก-ปูอัด-ชีส",
     "description": "ไข่-แฮม-ไส้กรอก-ปูอัด-ชีส",
     "price": 50,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021042709534094294/detail/menueditor_item_612ad203591244a69c99f76ce6aa0439_1619517110920033576.webp"
    },
    {
      "id": 16,
     "category": "เครื่องดื่ม",
     "menu": "ลาเต้",
     "description": "หวานสามโลก",
     "price": 50,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE20220905151152136464/detail/28f3f630_eb251e86505c.webp"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "ชานมเย็น",
     "description": "หวานสามโลก",
     "price": 25,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021101906135326019/detail/menueditor_item_90f8863c889641278bd9a25e19e6ada5_1636942467385086413.webp"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "ชาเขียว",
     "description": "หวานสามโลก",
     "price": 25,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE20220905151221024833/detail/b6debf7b_09e166ed32f9.webp"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "โกโก้",
     "description": "หวานสามโลก",
     "price": 25,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2022050410202434904/detail/menueditor_item_3fe48816b34142b29b57b135a5a5cb7f_1655139321410982919.webp"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "ชามะนาว",
     "description": "หวานสามโลก",
     "price": 20,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE20220905151230071501/detail/4768a395_3ea127291f9f.webp"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "น้ำมะนาว",
     "description": "หวานสามโลก",
     "price": 25,
     "img": "https://www.ajinomotofoodservicethailand.com/wp-content/uploads/2022/01/batch.jpg"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "อเมริกาโน",
     "description": "หวานสามโลก",
     "price": 60,
     "img": "https://d1sag4ddilekf6.azureedge.net/compressed/items/THITE20220905151147038410/photo/7c0b93b0_3cf76d5000f0.png"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "น้ำอัดลม",
     "description": "หวานสามโลก",
     "price": 20,
     "img": "https://fit-d.com/uploads/food/a3e53414c16884a2f78efbd8bd9dc5e7.jpeg"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "น้ำผึ้งมะนาว",
     "description": "หวานสามโลก",
     "price": 25,
     "img": "https://img.kapook.com/u/2015/surauch/cook2/e1.jpg"
    },
    {
     "category": "เครื่องดื่ม",
     "menu": "น้ำเปล่า",
     "description": "หวานสามโลก",
     "price": 15,
     "img": "https://st.bigc-cs.com/public/media/catalog/product/47/88/8851952350147/8851952350147.jpg"
    },
    {
        "category": "โตเกียว",
        "menu": "ไส้ครีม",
        "description": "",
        "price": 5,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021092304334771871/detail/menueditor_item_bca279f1d5f94ebf971ca07b47d3a465_1632414517596097204.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไข่+ปูอัด",
        "description": "",
        "price": 15,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021092310320269970/detail/menueditor_item_665e3157b34d45bfbb2d2745c2c5d70b_1632392843095602067.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไข่+ไส้กรอก+หมูสับ",
        "description": "",
        "price": 20,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021010815243293743/detail/menueditor_item_c45a9dbd8d3543f093a85d90545972f8_1610119394359688008.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไข่+พริกเผา",
        "description": "",
        "price": 15,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021092212533356892/detail/menueditor_item_e71153cad1634acb97c902aa0bbca802_1633142550680976178.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ช็อกโกแลต+ฝอยทอง",
        "description": "",
        "price": 20,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021092309212478159/detail/menueditor_item_2892431d1f9342c1860d6f5e7637c3fe_1632388737133234695.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไข่+หมูสับ",
        "description": "",
        "price": 15,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021010815211930458/detail/menueditor_item_fb438a68fe534208833041df2f1c9aaf_1617075491193694073.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไข่+พริกเผา",
        "description": "",
        "price": 15,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021071606411787846/detail/menueditor_item_c200567efd4640f2b05a040e5f5bc8f6_1626417445833472426.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไส้สังขยา",
        "description": "",
        "price": 5,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021010815154464687/detail/menueditor_item_329ffaafcc344e6dac1f99585d339366_1610118906217604733.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "ไข่+แฮม+หมูหยอง",
        "description": "",
        "price": 20,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021092213050919066/detail/menueditor_item_543924b7a53544d59ac77fa51ee938c2_1632321997979222749.webp"
      },
      {
        "category": "โตเกียว",
        "menu": "วนิลา+ฝอยทอง",
        "description": "",
        "price": 15,
        "img": "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/THITE2021092310265170644/detail/menueditor_item_c8324fd384864f7eb0802cf7b68e47ed_1632392752414313591.webp"
      },
   ];