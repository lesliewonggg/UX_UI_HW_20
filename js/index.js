function fade() {
    $(".preloader").fadeOut("slow");
    }
    setTimeout(fade, 3000);

/* hover jquery */

$(".michi").on({
    "mouseover" : function() {
        this.src = "images/michi.png";
    },
    "mouseout" : function() {
        this.src='images/folder.png';
         }
    });


$(".plantae").on({
    "mouseover" : function() {
        this.src = "images/plantae.png";
    },
    "mouseout" : function() {
        this.src='images/folder.png';
         }
    });

$(".nps").on({
    "mouseover" : function() {
        this.src = "images/nps.png";
    },
    "mouseout" : function() {
        this.src='images/folder.png';
         }
    });

$(".ourhouse").on({
    "mouseover" : function() {
        this.src = "images/ourhouse.png";
    },
    "mouseout" : function() {
        this.src='images/folder.png';
         }
    });

$(".finalproject").on({
    "mouseover" : function() {
        this.src = "images/finalproject.png";
    },
    "mouseout" : function() {
        this.src='images/folder.png';
         }
    });