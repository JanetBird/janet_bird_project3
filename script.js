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


$(function(event){

const userChoiceType = $("input[name=place]:checked").val();
const userChoicePeople = $("input[name=people]:checked").val();
const userChoiceActivity = $("input[name=activity]:checked").val();


    $("form").on("submit", function (event) {

        event.preventDefault();

        const vacationType = destination[userChoiceType];
        //filter array with to include only the objects that contain the value of userChoicePeople in the value of the people key 

        const peopleChoice = vacationType.filter(function (type){
            return type.people.includes(userChoicePeople) === true;
        });

        const activityChoice = peopleChoice.filter(function (type){
            return type.activityLevel.includes(userChoiceActivity) === true;
        });

        const result = activityChoice[0].place;

        $(`.${result}`).removeClass("active");

        $(`.${result}`).addClass("active");

        $("form").addClass("hidden");


    });

    // $("button").click(function () {
    //     // window.location.href = 'https://www.google.com';
    // });
});

