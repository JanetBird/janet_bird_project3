const destination = {
    nature: [
        {
            place: "lauterbrunnen",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "alot"
        },
        {
            place: "railayBeach",
            people: ["alone", "friends"],
            activityLevel: ["little", "nothing"]
        },
        {
            place: "jasper",
            people: ["family", "couple"],
            activityLevel: ["nothing", "little"]
        }
    ],
    city: [
        {
            place: "kyoto",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "alot"
        },
        {
            place: "barcelona",
            people: ["alone", "friends"],
            activityLevel: ["little", "nothing"]
        },
        {
            place: "nyc",
            people: ["family", "couple"],
            activityLevel: ["nothing", "little"]
        }
    ],
    culture: [
        {
            place: "bruges",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "alot"
        },
        {
            place: "berlin",
            people: ["alone", "friends"],
            activityLevel: ["little", "nothing"]
        },
        {
            place: "stuttgart",
            people: ["family", "couple"],
            activityLevel: ["nothing", "little"]
        }
    ]
};


$(function (event) {

    $(".main-start-icon").on("click", function () {
        $('html,body').animate({
            scrollTop: $(".question-type").offset().top
        }, 3000);
    });

    $("form").on("submit", function (event) {

        event.preventDefault();

        const userChoiceType = $("input[name=place]:checked").val();
        const userChoicePeople = $("input[name=people]:checked").val();
        const userChoiceActivity = $("input[name=activity]:checked").val();

        const vacationType = destination[userChoiceType];

        const peopleChoice = vacationType.filter(function (type) {
            return type.people.includes(userChoicePeople) == true;
        });

        console.log(peopleChoice);

        const activityChoice = peopleChoice.filter(function (type){
            return type.activityLevel.includes(userChoiceActivity) === true;
        });

        const result = activityChoice[0].place;

        $(`.${result}`).removeClass("active");

        $(`.${result}`).addClass("active");

        $("form").addClass("hidden");

    });

    const footprint = function (klass, delay, animation) {
        $(klass).delay(delay);
        $(klass).addClass(animation);
    }
    
    $(".button").on("click", function () {
        footprint(".footprint-left-1", 0, "animate");
        footprint(".footprint-right-1", 500, "animate");
        footprint(".footprint-left-2", 1000, "animate");
        footprint(".footprint-right-2", 1500, "animate");
        footprint(".footprint-left-3", 2000, "animate");

        setTimeout(function () {
            $(".animate").removeClass("animate");
        }, 6000);

        $('html,body').animate({
            scrollTop: $(".form-question-people").offset().top
        }, 6000);
    });

    $(".button2").on("click", function () {
        footprint(".footprint-left-4", 0, "animate");
        footprint(".footprint-right-3", 500, "animate");
        footprint(".footprint-left-5", 1000, "animate");
        footprint(".footprint-right-4", 1500, "animate");
        footprint(".footprint-left-6", 2000, "animate");

        setTimeout(function () {
            $(".animate").removeClass("animate");
        }, 6000);

        $('html,body').animate({
            scrollTop: $(".form-question-level").offset().top
        }, 6000);
    });
});
