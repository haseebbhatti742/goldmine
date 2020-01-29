var countyArray = new Array("Antrim","Armagh","Carlow","Cavan", "Clare", "Cork", "Derry", "Donegal", "Down", "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monoghan", "Offlay", "Roscommon", "Sligo", "Tipperary", "Tyron", "Waterford", "Westmeath", "Wexford", "Wicklow");
var AntrimArray = new Array("Aghaghellon", "Aghalee" ,"Ahoghil", "Aldergove");
var ArmaghArray= new Array();
var CarlowArray= new Array();
var CavanArray= new Array();
var ClareArray= new Array();
var CorkArray= new Array();
var DerryArray= new Array();
var DonegalArray= new Array();
var DownArray= new Array();
var DublinArray= new Array();
var FermanaghArray= new Array();
var GalwayArray= new Array();
var KerryArray= new Array();
var KildareArray= new Array();
var KilkennyArray= new Array();
var LaoisArray= new Array();
var LeitrimArray= new Array();
var LimerickArray= new Array();
var LongfordArray= new Array();
var LouthArray= new Array();
var MayoArray= new Array();
var MeathArray= new Array();
var MonoghanArray= new Array();
var OfflayArray= new Array();
var RoscommonArray= new Array();
var SligoArray= new Array();
var TipperaryArray= new Array();
var TyronArray= new Array();
var WaterfordArray= new Array();
var WestmeathArray= new Array();
var WexfordArray= new Array();
var WicklowArray= new Array();

var cat1Array = new Array("General Stuff", "Jobs", "Cars", "Services", "Real Estate", "Furniture", "Electronics", "Fashion", "Beauty Products", "Farming", "Jewellery");
var GeneralStuffArray = new Array("Clothes / Accessories", "Jewellery / Watches", "Kids / Baby Stuff", "Home & Graden", "Antiques / Collectibles", "Office Furniture & Equipments", "Sports & Leisure", "Computer / Software", "Mobiles & Tablets", "TV / DVD / Vision, Photo", "Audio / Music / Hi-Fi", "Musical Instruments", "Video Games / Consoles", "Books", "Tickets", "Health / Beauty", "Electronics", "Home Furniture", "Other General Stuff");
var JobsArray = new Array("Advertising / PR", "Bar / Restaurant / Hotel", "Call Center / Customer Service", "Chefs / Cooks / Kitchen" , "Cleaning", "Computer / IT", "Construction / Trade / Engineer" , "Drivers / Security", "Farming / Gsardening", "Hair / Beauty", "Healthcare / Nursing", "Legal / Paralegal", "Media, Design & Creative", "Nanny / Babysitting", "Office / Office Admin", "Part-Time / Evening / Weekend", "Recruitment / HR", "Retail", "Sales / Marketing", "Teaching / Nursery", "Accounting / Finance", "Other Jobs");
var CarsArray = new Array("Car", "Car parts & Accessories", "Campervas & Caravans", "Vans, Trucks & Trailors", "Motorbikes & Scooters", "Motorbike parts & Accessories", "Boats & Water Sports");
var ServicesArray = new Array("Cleaners , Cleaning", "Computer & Freelance", "Courses & Training", "Entertainment", "Fitness & Personal Trainers", "Health & Beauty", "Photography & Video", "Property & Shipping", "Removals & Storage", "Tax, Insurance & Financial", "Travel Agents / Vacations", "Wedding & Venues", "Building Services", "Other Services");
var RealEstateArray = new Array("Flat for Rent", "Flat Sharing", "House for Sale", "House to let", "Flat for Sale", "Holiday Homes", "Parking", "Office to let/sale", "Commercial propoerty for sale/rent", "Other Property");
var FurnitureArray = new Array("Armchairs", "cabinets", "Bedroom Furniture", "sofa & Suites", "Occasional Furniture", "Office Furniture", "Outdoor Furniture", "Other Furniture");
var ElectronicsArray = new Array("Computer", "Laptops", "Televisions", "Large Appliances", "Small Appliances", "Headphones", "Projectors", "Home Audio", "Dish/Satellite", "Other Electronics");
var FashionArray = new Array();
var BeautyProductsArray = new Array();
var FarmingArray  = new Array();
var JewelleryArray = new Array();

var $selectCounty = $('#county');
var $selectArea = $('#area');
var $selectCat1 = $('#cat1');
var $selectCat2 = $('#cat2');

addSelectItems(countyArray, $selectCounty);
addSelectItems(cat1Array, $selectCat1);

function catFunction(){
    document.getElementById("cat2").options.length = 0;
    var x = $("#cat1").find(":selected").text();
    var arr =  this[x.replace(/\s/g, "")+"Array"];
    addSelectItems(arr, $selectCat2);
    if(x == "Jobs" || x == "Services"){
        document.getElementById("price_type").disabled = true;
        document.getElementById("prod_price").disabled = true;
    }
    else{
        document.getElementById("price_type").disabled = false;
        document.getElementById("prod_price").disabled = false;
    }
}

function countyFunction(){
    document.getElementById("area").options.length = 0;
    var x = $("#county").find(":selected").text();
    var arr =  this[x.replace(/\s/g, "")+"Array"];
    addSelectItems(arr, $selectArea);
}

function addSelectItems(array, $select){
    $.each(array, function(key, value) {
        var $option = $("<option/>", {value: key, text: value});
        $select.append($option);
    });
}

function priceType(){
    var x = document.getElementById("price_type").value;
    if(x == "amount"){
        document.getElementById("prod_price").disabled = false;
    }
    else if(x == "free"){
        document.getElementById("prod_price").disabled = true;
    }
    else if(x == "swap"){
        document.getElementById("prod_price").disabled = true;
    }
}

$('#postage').change(function(){
    if($(this).is(':checked')) {
        document.getElementById("collection_price").disabled = false;
    } else {
        document.getElementById("collection_price").disabled = true;
    }
});