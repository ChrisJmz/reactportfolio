export const opacity = {
    initial: {
        opacity: 1,
    },
    enter: {
        opacity: 0,
        top: -100,
        transition: {duration: 1, delay: 2.5},
        transitionEnd: {top: "47.5%"}
    },
    exit: {
        opacity: 1,
        top: "40%",
        transition: {duration: 1, delay: .2, ease: [0.33, 1, 0.68, 1]}
    }
}

export const curve = (initialPath, targetPath) => {
    return {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: initialPath,
            transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
        }
    }
}

export const slideUp = {
    initial: {
        top: "0px"
    },
    enter: {
        top: "-200vh",
        transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
        transitionEnd : {
            top: "100vh"
        }
    },
    exit: {
        top: "-100vh",
        transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
    }
}