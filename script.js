const destination = {
    nature: [
        {
            place: "Lauterbrunnen",
            people: ["couple", "alone", "family", "friends"],
            activityLevel: "alot" 
        },
        {
            place: "Railay Beach",
            people: ["couple", "alone", "friends"],
            activityLevel: "little"
        },
        {
            place: "Jasper",
            people: ["family", "couple"],
            activityLevel: "nothing"
        }
    ],
    city: [
        {
            place: "Kyoto",
            people: ["family", "alone"],
            activityLevel: "alot"
        },
        {
            place: "Barcelona",
            people: ["couple", "family"],
            activityLevel: "a little"
        },
        {
            place: "New York City",
            people: ["couple", "alone"],
            activityLevel: "nothing"

        }
    ],
    culture: [
        {
            place: "Bruges",
            people: ["couple", "alone"],
            activityLevel: "nothing"
        },
        {
            place: "Berlin",
            people: ["family", "friends", "couple"],
            activityLevel: "alot"
        },
        {
            place: "Stuttgart",
            people: ["family", "alone", "friends"],
            activityLevel: "little"
        }
    ]
};

$(function(event){

    $("form").on("submit", function (event) {

        event.preventDefault();

        const userChoiceType = $("input[name=place]:checked").val();
        const userChoicePeople = $("input[name=people]:checked").val();
        const userChoiceActivity = $("input[name=activity]:checked").val();

        const vacationType = destination[userChoiceType];

        //filter array with to include only the objects that contain the value of userChoicePeople in the value of the people key 

        const peopleChoice = vacationType.filter(function (type){
            return type.people.includes(userChoicePeople) == true;
        });

        console.log(peopleChoice);

        
        



    });
});
