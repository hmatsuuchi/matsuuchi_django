function randomizeCloudMotion() {
  // animation parameters
  const animationDuration = 100000 + Math.random() * 10000;
  const movementFactor = 1;

  // random value generator
  const ranVal = () => {
    let output = Math.random() * movementFactor;

    if (Math.random() < 0.5) {
      output *= -1;
    }

    return Math.round(output);
  };

  // cloud one
  const cloudOne = document.getElementById("cloud-1");

  const cloudOneMotion = [
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

  const cloudOneTiming = {
    duration: animationDuration,
    iterations: Infinity,
  };

  if (cloudOne) {
    cloudOne.animate(cloudOneMotion, cloudOneTiming);
  }

  // cloud two
  const cloudTwo = document.getElementById("cloud-2");

  const cloudTwoMotion = [
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

  const cloudTwoTiming = {
    duration: animationDuration,
    iterations: Infinity,
  };

  if (cloudTwo) {
    cloudTwo.animate(cloudTwoMotion, cloudTwoTiming);
  }
}

// drives code
randomizeCloudMotion();
