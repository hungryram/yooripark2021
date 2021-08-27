
    function button(){
        gsap.from(".uk-button", {
            duration: 1,
            y: -100
        });
    }

    function leaveButton() {
        gsap.to(".uk-button", {
            duration: 2,
            x: 100,
        })
    }

    barba.init({
        transitions: [
            {
                enter() {
                    button();
                },
                once() {
                    button();
                },
                leave() {
                    console.log("leaveing");
                }
                
            }
        ]
    });