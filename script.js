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

    $('.button').on('click', function () {
        $('.footprint-left-1').css('opacity');
        $('.footprint-left-1').addClass('animate');
    });

    $('.button').on('click', function () {
        $('.footprint-left-2').delay(1500).css('opacity');
        $('.footprint-left-2').addClass('animate-1');
    });

    $('.button').on('click', function () {
        $('.footprint-right-1').delay(1000).css('opacity');
        $('.footprint-right-1').addClass('animate-2');
    });

    $('.button').on('click', function () {
        $('.footprint-right-2').delay(1500).css('opacity');
        $('.footprint-right-2').addClass('animate-3');
    });

    $('.button').on('click', function () {
        $('.footprint-left-3').delay(2000).css('opacity');
        $('.footprint-left-3').addClass('animate-4');
    });
    
    $('.button').on('click', function () {
        $('.footprint-left-1').css('opacity');
        $('.footprint-left-1').addClass('animate');
    });

    $('.button').on('click', function () {
        $('.footprint-left-2').delay(1500).css('opacity');
        $('.footprint-left-2').addClass('animate-1');
    });

    $('.button').on('click', function () {
        $('.footprint-right-1').delay(1000).css('opacity');
        $('.footprint-right-1').addClass('animate-2');
    });

    $('.button').on('click', function () {
        $('.footprint-right-2').delay(1500).css('opacity');
        $('.footprint-right-2').addClass('animate-3');
    });

    $('.button').on('click', function () {
        $('.footprint-left-3').delay(2000).css('opacity');
        $('.footprint-left-3').addClass('animate-4');
    });

});
