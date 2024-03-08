function randomizeCircleMotion() {
  // animation parameters
  const animationDuration = 100000 + Math.random() * 10000;

  const movementFactor = 5;

  // random value generator
  const ranVal = () => {
    let output = Math.random() * movementFactor;

    if (Math.random() < 0.5) {
      output *= -1;
    }

    return Math.round(output);
  };

  // circle one
  const circleOne = document.getElementById("circle-1");

  const circleOneMotion = [
    {
      transform: "translate(0, 0)",
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: "translate(0, 0)",
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
  ];

  const circleOneTiming = {
    duration: animationDuration,
    iterations: Infinity,
  };

  if (circleOne) {
    circleOne.animate(circleOneMotion, circleOneTiming);
  }

  // cirle two
  const circleTwo = document.getElementById("circle-2");

  const circleTwoMotion = [
    {
      transform: "translate(0, 0)",
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: `translate(${ranVal()}rem, ${ranVal()}rem)`,
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
    {
      transform: "translate(0, 0)",
      easing: "cubic-bezier(0.42, 0.0, 0.58, 1.0)",
    },
  ];

  const circleTwoTiming = {
    duration: animationDuration,
    iterations: Infinity,
  };

  if (circleTwo) {
    circleTwo.animate(circleTwoMotion, circleTwoTiming);
  }
}

// drives code
randomizeCircleMotion();
