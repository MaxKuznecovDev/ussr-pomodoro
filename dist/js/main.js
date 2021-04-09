import checkOptions from "./setOptionsTimer.js";
import transformElementToCircleSlider from "./circleSliderDragAndDrop.js";
import checkOptionsSound from "./setOptionsSound.js";
import addAnimationToButtons from "./animationButtons.js";


import Timer from "./Timer.js";

const rootClassName = "timerPomodoro";
const configTime = {
    selectorOutputElem   : ".timeHidden" ,
    selectorTargetToPage : ".sliderMinute" ,
    objNamesOfSlider     : {
        arrClassNamesBall        : [ "ball" , "ballTime" ] ,
        arrClassNamesCircleBig   : [ "circleBig" , "circleBigTime" ] ,
        arrClassNamesCircleSmall : [ "circleSmall" , "circleSmallTime" ] ,
    } ,
    maxRange    : 100 ,
    hint        : "time" ,
    limiter     : true ,
    minPosition : 1 ,
};

const configRound = {
    selectorOutputElem   : ".roundHidden" ,
    selectorTargetToPage : ".sliderRound" ,
    objNamesOfSlider     : {
        arrClassNamesBall        : [ "ball" , "ballRound" ] ,
        arrClassNamesCircleBig   : [ "circleBig" , "circleBigRound" ] ,
        arrClassNamesCircleSmall : [ "circleSmall" , "circleSmallTime" ] ,
    } ,
    maxRange    : 15 ,
    hint        : "round" ,
    limiter     : true ,
    minPosition : 1 ,
};

const configBigRest = {
    selectorOutputElem   : ".bigRestHidden" ,
    selectorTargetToPage : ".sliderBigRest" ,
    objNamesOfSlider     : {
        arrClassNamesBall        : [ "ball" , "ballBigRest" ] ,
        arrClassNamesCircleBig   : [ "circleBig" , "circleBigBigRest" ] ,
        arrClassNamesCircleSmall : [ "circleSmall" , "circleSmallTime" ] ,
    } ,
    maxRange    : 30 ,
    hint        : "rest" ,
    limiter     : true ,
    minPosition : 1 ,
};

const configRest = {
    selectorOutputElem   : ".restHidden" ,
    selectorTargetToPage : ".sliderRest" ,
    objNamesOfSlider     : {
        arrClassNamesBall        : [ "ball" , "ballRest" ] ,
        arrClassNamesCircleBig   : [ "circleBig" , "circleBigRest" ] ,
        arrClassNamesCircleSmall : [ "circleSmall" , "circleSmallTime" ] ,
    } ,
    maxRange    : 10 ,
    hint        : "rest" ,
    limiter     : true ,
    minPosition : 1 ,
};

const configVolume = {
    selectorOutputElem   : ".currentVolume" ,
    selectorTargetToPage : ".sliderVolume" ,
    objNamesOfSlider     : {
        arrClassNamesBall        : [ "ball" , "ballVolume" ] ,
        arrClassNamesCircleBig   : [ "circleBig" , "circleBigVolume" ] ,
        arrClassNamesCircleSmall : [ "circleSmall" , "circleSmallVolume" ] ,
    } ,
    maxRange    : 100 ,
    hint        : "sound" ,
    limiter     : false ,
    minPosition : 0 ,
};

const configBehavior = {
    time    : transformElementToCircleSlider( configTime ) ,
    round   : transformElementToCircleSlider( configRound ) ,
    bigRest : transformElementToCircleSlider( configBigRest ) ,
    rest    : transformElementToCircleSlider( configRest ) ,
    volume  : transformElementToCircleSlider( configVolume ) ,
};

const configTimeForCheckOptions = {
    classLabel         : "labelTime" ,
    classHidden        : "timeHidden" ,
    classCircleBig     : "circleBigTime" ,
    classBall          : "ballTime" ,
    startPosition      : "25:00" ,
    classOutputElement : "currentSecondsAndMinute" ,
    maxRange           : 100 ,
};

const configBigRestForCheckOptions = {
    classLabel         : "labelBigRest" ,
    classHidden        : "bigRestHidden" ,
    classCircleBig     : "circleBigBigRest" ,
    classBall          : "ballBigRest" ,
    startPosition      : "15" ,
    classOutputElement : "currentSecondsAndMinute" ,
    maxRange           : 30 ,
};

const configRestForCheckOptions = {
    classLabel         : "labelRest" ,
    classHidden        : "restHidden" ,
    classCircleBig     : "circleBigRest" ,
    classBall          : "ballRest" ,
    startPosition      : "5" ,
    classOutputElement : "currentSecondsAndMinute" ,
    maxRange           : 10 ,
};

const configRoundForCheckOptions = {
    classLabel         : "labelRound" ,
    classHidden        : "roundHidden" ,
    classCircleBig     : "circleBigRound" ,
    classBall          : "ballRound" ,
    startPosition      : "3" ,
    classOutputElement : "currentCountOfWork" ,
    maxRange           : 15 ,
};

checkOptions( configRoundForCheckOptions );
checkOptions( configRestForCheckOptions );
checkOptions( configTimeForCheckOptions );
checkOptions( configBigRestForCheckOptions );

checkOptionsSound( configBehavior.volume );

const timer = new Timer( rootClassName , configBehavior );
addAnimationToButtons(rootClassName);

// let imgStr = "89504E470D0A1A0A0000000D4948445200000040000000400806000000AA6971DE00000006624B474400FF00FF00FFA0BDA7930000081E49444154789CE59B7F5054D715C7BFE7BD5D10F9B912440DB28BA4E2B405ABD64CEDA4713B69DA6948105331953480C6D02926A9E3B46A88B6D336419DCCB44D53AD9399B6CBDAA80D892091B49D76A6E0B4B14DA92824B590282C50F9D50476AD2E2CFBDEE91F0BEC2EECC2BEDDF73638F9FC03FBEE7DE79CFB7D77CFFDF1EE021F73486B07BD9B4B52DD32EE65125613730E082B8991C640028094896A2304FC8F0943607430513BB17C5927E07C46ADF5032DE3D34480CE87CA569180C7007E00401E00214C533280CB00DE94593CB1A2FE57EDAA0539816A02349797EB53FB478B05A20A06EE56CBAE3FF477021FCBB4DB4E5263A35B158B911A682E2FD7A70E8EED24C65E00A6C8430A894E061F31D9BB7F19A9101109D0BDA9EC0B12F82801B991D8898056127897B1D6FA97700D8425404F51519CEC8AFF0983CBC3B5A1220CC67176D09EAC46CBA8D29B15077FAD60478E00F76F41B45AE9BD1AF32F92B1D5F846F5BB4A6E522480ADB0F43E66D4024854145AF47080B9D0546FFD73A837843C3C7516961532E31CE66FE301200944BFB715966E0DF586907A80ADA0AC88894F0110C30E2DBA48203C62AAAB7E7DAE8A730AD05550F24510FD0E40AC2AA1450F17313D68ACB7FC71B64AB30AE099D1F1DB98DFDD7E36EC9244EBB3CF59DE0B5621680EE834972D20814FE1F66D3C00240B22BFDE53541417AC4250018464FC14C06734092B8A10902BB916BE304BF94C6C9B4BEE6199CE072BBF0D6140B8C774F6D76F4D2F98D103D86CD6B1849F235A8D17A332B010433EDE5C5EAE9F5E304380AE14E313D198E591282279CB43C87CE528D29FDF0F90B67A13909B3638B63DC0752FCDE5E5FA3B06C63AA0F1AA2E26DB88D4271F474C56E6D4B5DE1DBB217D38A2A55B8071CDE8B0E5F8AE2075BEE5A9FDA3C5203269E59F62F4487E381F495B1E04E974FE6542B87B264A02C08AEE14D3360027262FF94721D02EB036BE6357DD85D42777409FB14C1B0721C2CCDF828F0053B25FDD5CB29218EBD57648B131309414614955E547DEF809365C2BD89133F961AA0788B2500A951F7FDC9A5C2CAA28832E2D5555BB9122C0FD2880EF01BE5F0196F3D5CAC442FC42184AB722E1FE8D9A67F7B020FA2A7C05F06C5D93E26D2D21211E42FC42BF6BB19F5801C3E3C5100DC96A84AA156B6CF9C50663C3C9611D00B82561238815A5E1B8B5B958FCECEE684D64D44694F5311B01D40900C002F2945A58F0E9559A363EDEFC79A43EBD136252F0B5D882D59F42DA772BA05B96AED8FEE446AE0E00883967F6EA812C68FBDD4E7E381FFACC3B117B970903078E4072DCF02B8F5B9787B4FD4F83F43AB8BA7A60AF7943998389367BBA3D61A53A61ABC7B0E53478DC0D7D6606D29FDBE7D7137C1B3FDEDD8B1B7F680CC7858F008CC52AC4AC2ACE8B6D18AA7A11EC1AF788505509D1908CB8B5B948DBF794A7F1BD7D18F8FE0B90A7F58E10590C782742F372D3C3D9D286A1232F797A42C6522CA9AA44DA33DF06C5E831DEDD8B81670F411AB6876B3E11F00A10AF4AC41AE0FC67EB544FD02D4DF77BF292DD1189693F01E63701F3AD4A93B689BF3755B1A60171EBF2A6BABDBB6FC09313329622FD877B21A6244562FA06E01520AC2CA235D3135E7FE5216F625CBE0CE9CF57425C9432B7A1C0F8084018542966D5885B9BEB4D783DD73170E010A4E111382FBD83A1C33FF38870E792487AC220E01D063B548C5D150CDBB7799E7CCF750C1C3C0C69C49BF09C17DBBC22642C43E2035F0AC7453B303113F49CC951B814565A5F21F6D7CE61C1EA4F62C4FAAA5FE327715E6CC3E0733F46C297CDB879FE6FCA1D10790520962F2BCDAAA3AD579058F095195B5B6A71B3E92DDC6C9AB18B3D2386D1D62B61D967496E0526041063F44D92CB2D43C1B0E8BCF40E7A4B9E829098E0773D26DB84454F3C0AD11076728A069220BBCF033E8FBD6B53690B547A13242C8C83A1EC11451B22FFD9B907EEFF7EA886FB3961C23FB2EAAAEF06FC9F78835A0EE45B4E7C70CC82810387317E7D402DB32A426F4EFE37258024B0556D37A3EFB6A36FF74138CE3400B2ACB6F9B091493E39F9FF9400D9B5D60E02DE56DB19BB5C18B6D6A0FF992A8CF75C57DB7C385CC8AEB54E0DFBD393DE51ADBC8EB5BF8FBEDD07316CAD01BB5539E31816C47CCCF7B39F0043E9B1A700746AE59C25098E330DE8FFCE0FE0BADAE55F168DAF08E35AA6A3FBB4EF253F013EFBF2CBE30C3EA2751CAEAE1EF4EDFD1186AB5F857CCB89D1D62B91ACEB4387F8D0F493A533C628369B75B6A4CCE6A89D0324D27C5609000CB499ECB6B5D3059831F1A1C64637817641EDD74441238B8A1B9904FE66A073C501677EC6FAEABF82715CFBB8A2051F35D55A2F042A093AF56507ED01D0A2594CD1A3558C71EE0B56185480AC46CBA824F0D70144B4F1F6113322B2F4B5E53535CE6015665DFC64D75A3B98681300C5A7B0E7012E02172DAFFFCDFBB3559A73F59755676924F0630024D542D31E094CDB8C67AD7F9AAB6248CB5FE359EB6B4CB405B7474F182342B1A9DE722694CA8A76413A0BCBCCC45C0760BEBEFB1E61412ECCAA3DD114EA0D8ADE0B64D5591A2589D603B8A43834ED6911595AAFA4F140182F46B2CF59DE633B6D8067E1149DC9D2ECC800BF34EE4ADA3057C20B4444AF576C85A5EB64E0175A1CAE0A09E6CB20B122D011D85089F8FD129BCDBAEE24D37606EF076145A4F642E42A08878CFA5B16AAA989687452ED94039BCDBAEE14D33666AE00F039B5EC4EE302311FCB74749F9E373F9C0CC4D5CD252B4509DF98388DB506E1FFD44602D0C2440DB21BAFCCF6C38770D1FC0C9B2DBFD8200BBA7B4914F2C0F22A807200BE03A0247887533BC00E808600EE0009FF66496E85283465D559343E40FC31E7FF4E86D422FE06B7EC0000000049454E44AE426082";
// let resArr = [];
// for(let i = 0 ; i < imgStr.length; i+=2){
//     let nextIndex = i + 2;
//     let hexNum = "0x" + imgStr.slice(i,nextIndex);
//     let tenNumber = parseInt(hexNum,16);
//     // console.log(tenNumber)
//     resArr.push(tenNumber);
//
// }
// let buffer = new Uint8Array(resArr);
// let blob = new Blob([buffer], {type: 'image/png'});
// link.href = URL.createObjectURL(blob);
