//список стоимости элементов
	var list_value = {
	//одинарные прыжки
    "1t":0.4, "1s":0.4, "1lo":0.5, "1f":0.5, "1lz":0.6, "1eu":0.5,
	//двойные прыжки
    "1a":1.1, "2t":1.3, "2s":1.3, "2lo":1.7, "2f":1.8, "2lz":2.1,
    //тройные прыжки
	"2a":3.3, "3t":4.2, "3s":4.3, "3lo":4.9, "3f":5.3, "3lz":5.3,
    //четверные прыжки
	"3a":8, "4t":9.5, "4s":9.7, "4lo":11, "4f":11, "4lz":11,
    "4a":12.5,

	//ВРАЩЕНИЯ В ОДНОЙ ПОЗИЦИИ БЕЗ СМЕНЫ НОГИ
	//стоя
	"uspb":1, "usp1":1.2, "usp2":1.5, "usp3":1.9, "usp4":2.4,
	//в заклоне
    "lspb":1.2, "lsp1":1.5, "lsp2":1.9, "lsp3":2.4, "lsp4":2.7,
	//в либеле
	"cspb":1.1, "csp1":1.4, "csp2":1.8, "csp3": 2.3, "csp4":2.6,
	// в волчке
	"sspb":1.1, "ssp1":1.3, "ssp2": 1.6, "ssp3":2.1, "ssp4":2.5,

	//ПРЫЖКИ ВО ВРАЩЕНИЯ
	//прыжок в стоя
	"fuspb":1.5, "fusp1":1.7, "fusp2":2, "fusp3":2.4, "fusp4":2.9,
	//прыжок в заклон
	"flspb":1.7, "flsp1":2, "flsp2":2.4, "flsp3":2.9, "flsp4":3.2,
	//прыжок в либелу
	"fcspb":1.6, "fcsp1":1.9, "fcsp2":2.3, "fcsp3":2.8, "fcsp4":3.2,
	//прыжок в волчок
	"fsspb":1.7, "fssp1":2, "fssp2":2.3, "fssp3":2.6, "fssp4":3,

	//ВРАЩЕНИЯ СО СМЕНОЙ НОГИ
	//стоя со сменой ноги
	"cuspb":1.5, "cusp1":1.7, "cusp2":2, "cusp3":2.4, "cusp4":2.9,
	//заходом прыжком стоя со сменой ноги
	"fcuspb":1.5, "fcusp1":1.7, "fcusp2":2, "fcusp3":2.4, "fcusp4":2.9,
	//заклон со сменой ноги
	"clspb":1.7, "clsp1":2, "clsp2":2.4, "clsp3":2.9, "clsp4":3.2,
	//заходом прыжком заклон со сменой ноги
	"fclspb":1.7, "fclsp1":2, "fclsp2":2.4, "fclsp3":2.9, "fclsp4":3.2,
	//либела со сменой ноги
	"ccspb":1.7, "ccsp1":2, "ccsp2":2.3, "ccsp3":2.8, "ccsp4":3.2,
	//заходом прыжком либела со сменой ноги
	"fccspb":1.7, "fccsp1":2, "fccsp2":2.3, "fccsp3":2.8, "fccsp4":3.2,
	//волчок со сменой ноги
	"csspb":1.6, "cssp1":1.9, "cssp2":2.3, "cssp3":2.6, "cssp4":3,
	//заходом прыжком волчок со сменой ноги
	"fcsspb":1.6, "fcssp1":1.9, "fcssp2":2.3, "fcssp3":2.6, "fcssp4":3,

	//КОМБИНАЦИИ ВРАЩЕНИЙ БЕЗ СМЕНЫ НОГИ
	"cospb":1.5, "cosp1":1.7, "cosp2":2, "cosp3":2.5, "cosp4":3,
	//заходом прыжком комбинации вращений без смены ноги
	"fcospb":1.5, "fcosp1":1.7, "fcosp2":2, "fcosp3":2.5, "fcosp4":3,

	//КОМБИНАЦИИ ВРАЩЕНИЙ СО СМЕНОЙ НОГИ
	"ccospb":1.7, "ccosp1":2, "ccosp2":2.5, "ccosp3":3, "ccosp4":3.5,
	//заходом прыжком комбинации вращений со сменой ноги
	"fccospb":1.7, "fccosp1":2, "fccosp2":2.5, "fccosp3":3, "fccosp4":3.5,

	//ДОРОЖКИ ШАГОВ
	"stsqb":1.5, "stsq1":1.8, "stsq2":2.6, "stsq3":3.3, "stsq4":3.9, "chsq1":3,

	//ПРЫЖКИ С q
	//одинарные прыжки
    "1tq":0.4, "1sq":0.4, "1loq":0.5, "1fq":0.5, "1lzq":0.6, "1euq":0.5,
	"1fqe":0.4, "1lzqe":0.48,
	//двойные прыжки
    "1aq":1.1, "2tq":1.3, "2sq":1.3, "2loq":1.7, "2fq":1.8, "2lzq":2.1,
	"2fqe":1.44, "2lzqe":1.68,
    //тройные прыжки
	"2aq":3.3, "3tq":4.2, "3sq":4.3, "3loq":4.9, "3fq":5.3, "3lzq":5.3,
	"3fqe":4.24, "3lzqe":4.24,
    //четверные прыжки
	"3aq":8, "4tq":9.5, "4sq":9.7, "4loq":11, "4fq":11, "4lzq":11,
	"4fqe":8.8, "4lzqe":8.8,
    "4aq":12.5,

	//ПРЫЖКИ С ГАЛКОЙ
	//одинарные прыжки
	"1eu<":0.5, "1t<":0.32, "1s<":0.32, "1lo<":0.4, "1f<":0.4, "1lz<":0.48,
	"1fe":0.4, "1lze":0.48, "1f<e":0.3, "1lz<e":0.36,
	//двойные прыжки
    "1a<":0.88, "2t<":1.04, "2s<":1.04, "2lo<":1.36, "2f<":1.44, "2lz<":1.68,
	"2fe":1.44, "2lze":1.68, "2f<e":1.08, "2lz<e":1.26,
    //тройные прыжки
	"2a<":2.64, "3t<":3.36, "3s<":3.44, "3lo<":3.92, "3f<":4.24, "3lz<":4.24,
	"3fe":4.24, "3lze":4.24, "3f<e":3.18, "3lz<e":3.18,
    //четверные прыжки
	"3a<":6.4, "4t<":7.6, "4s<":7.76, "4lo<":8.8, "4f<":8.8, "4lz<":9.2,
	"4fe":8.8, "4lze":8.8, "4f<e":6.6, "4lz<e":6.6,
    "4a<":10,

	//ПРЫЖКИ С ДВУМЯ ГАЛКАМИ
	//одинарные прыжки
	"1eu<<":0, "1t<<":0, "1s<<":0, "1lo<<":0, "1f<<":0, "1lz<<":0,
	"1f<<e":0, "1lz<<e":0,
	//двойные прыжки
    "1a<<":0, "2t<<":0.4, "2s<<":0.4, "2lo<<":0.5, "2f<<":0.5, "2lz<<":0.6,
	"2f<<e":0.3, "2lz<<e":0.36,
    //тройные прыжки
	"2a<<":1.1, "3t<<":1.3, "3s<<":1.3, "3lo<<":1.7, "3f<<":1.8, "3lz<<":2.1,
	"3f<<e":1.08, "3lz<<e":1.68,
    //четверные прыжки
	"3a<<":3.3, "4t<<":4.2, "4s<<":4.3, "4lo<<":4.9, "4f<<":5.3, "4lz<<":5.9,
	"4f<<e":3.18, "4lz<<e":3.54,
    "4a<<":8,

	//ВРАЩЕНИЯ С V
	//ПРЫЖКИ ВО ВРАЩЕНИЯ С V
	//прыжок в стоя
	"fuspbv":1.13, "fusp1v":1.28, "fusp2v":1.5, "fusp3v":1.8, "fusp4v":2.18,
	//прыжок в заклон
	"flspbv":1.28, "flsp1v":1.5, "flsp2v":1.8, "flspv3":2.18, "flsp4v":2.4,
	//прыжок в либелу
	"fcspbv":1.2, "fcsp1v":1.43, "fcsp2v":1.73, "fcsp3v":2.1, "fcsp4v":2.4,
	//прыжок в волчок
	"fsspbv":1.28, "fssp1v":1.5, "fssp2v":1.73, "fssp3v":1.95, "fssp4v":2.25,

	//ВРАЩЕНИЯ СО СМЕНОЙ НОГИ С V
	//стоя со сменой ноги
	"cuspbv":1.13, "cusp1v":1.28, "cusp2v":1.5, "cusp3v":1.8, "cusp4v":2.18,
	//заходом прыжком стоя со сменой ноги
	"fcuspbv":1.13, "fcusp1v":1.28, "fcusp2v":1.5, "fcusp3v":1.8, "fcusp4v":2.18,
	//заклон со сменой ноги
	"clspbv":1.28, "clsp1v":1.5, "clsp2v":1.8, "clsp3v":2.18, "clsp4v":2.4,
	//заходом прыжком заклон со сменой ноги
	"fclspbv":1.28, "fclsp1v":1.5, "fclsp2v":1.8, "fclsp3v":2.18, "fclsp4v":2.4,
	//либела со сменой ноги
	"ccspbv":1.28, "ccsp1v":1.5, "ccsp2v":1.73, "ccsp3v":2.1, "ccsp4v":2.4,
	//заходом прыжком либела со сменой ноги
	"fccspbv":1.28, "fccsp1v":1.5, "fccsp2v":1.73, "fccsp3v":2.1, "fccsp4v":2.4,
	//волчок со сменой ноги
	"csspbv":1.2, "cssp1v":1.43, "cssp2v":1.73, "cssp3v":1.95, "cssp4v":2.25,
	//заходом прыжком волчок со сменой ноги
	"fcsspbv":1.2, "fcssp1v":1.43, "fcssp2v":1.73, "fcssp3v":1.95, "fcssp4v":2.25,

	//КОМБИНАЦИИ ВРАЩЕНИЙ БЕЗ СМЕНЫ НОГИ С V
	"cospbv":1.13, "cosp1v":1.28, "cosp2v":1.5, "cosp3v":1.88, "cosp4v":2.25,
	//заходом прыжком комбинация вращений без смены ноги
	"fcospbv":1.13, "fcosp1v":1.28, "fcosp2v":1.5, "fcosp3v":1.88, "fcosp4v":2.25,

	//КОМБИНАЦИИ ВРАЩЕНИЙ СО СМЕНОЙ НОГИ С V
	"ccospbv":1.28, "ccosp1v":1.5, "ccosp2v":1.88, "ccosp3v":2.25, "ccosp4v":2.63,
	//заходом прыжком комбинации вращений со сменой ноги
	"fccospbv":1.28, "fccosp1v":1.5, "fccosp2v":1.88, "fccosp3v":2.25, "fccosp4v":2.63,

	};


//список акселей
	var arrOfAxels=[
		"1a", "2a", "3a", "4a",
		"1a<", "2a<", "3a<", "4a<",
		"1a<<", "2a<<", "3a<<", "4a<<"
	];

//список для показа дополнительного селекта
	var arrForAdditionalSelect=[
		"F", "Lz", "CUSp", "CLSp", "CCSp", "CSSp", "CoSp", "CCoSp"
	];

//список для изменения options в третьем прыжке каскада для оллера
	var arrOptionsForEu={"S" : "S","F" : "F"};

//список для изменения options в третьем прыжке каскада для остальных прыжков
	var arrOptionsForLoT={"T":"T", "Lo":"Lo"};
