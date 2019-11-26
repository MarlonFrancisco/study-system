export interface IPointsPerSubject {
    subject: string;
    point: number;
}

export interface IMatter {
    name: string;
}

export interface IMattersAndHours extends IPointsPerSubject {
    days: number;
}

export interface IEvent {
    name: string;
    start: string;
    end: string;
}

const pointsPerSubject = (
    dificulties: string[],
    matter: string,
): IPointsPerSubject => {
    return {
        subject: matter,
        point: dificulties.includes(matter) ? 1 : 0,
    };
};

const captureDaysInMonth = (month: number): number => {
    return new Date(new Date().getFullYear(), month, 0).getDate();
};

const determineDaysForStudyPerMatter = (
    dificulties: string[],
    matters: IMatter[],
    hours: number,
): IMattersAndHours[][] => {
    const informations = [];
    for (let month = 1; month <= 12; month++) {
        const hoursAvailableForStudy = dificulties.length
            ? captureDaysInMonth(month) * hours * 0.8
            : captureDaysInMonth(month) * hours;

        const hoursReforceMatters = captureDaysInMonth(month) * hours * 0.2;

        const availableStudy = hoursAvailableForStudy / matters.length;
        const availablePerDificulty = hoursReforceMatters / dificulties.length;

        informations.push(
            matters.map((matter: IMatter) => {
                const points = pointsPerSubject(dificulties, matter.name);
                if (points.point) {
                    return {
                        ...points,
                        days: (availableStudy + availablePerDificulty) / 24,
                    };
                }

                return {
                    ...points,
                    days: availableStudy / 24,
                };
            }),
        );
    }

    return informations;
};

const selectDatePerMatter = (
    dificulties: string[],
    matters: IMatter[],
    hoursForStudy: number,
): IEvent[] => {
    const mattersAndHours = determineDaysForStudyPerMatter(
        dificulties,
        matters,
        hoursForStudy,
    );
    const informations: IEvent[] = [];
    const currentDate = 0;
    mattersAndHours.map((matterAndHour, index) => {
        const currentMonth = index + 1;
        const daysAvailable = availableDaysInArray(currentMonth);
        matterAndHour.map((matter, indexT) => {
            for (let c = 1; c < Math.ceil(mattersAndHours[index][indexT].days); c++) {
                const initDate =
                    daysAvailable[
                        numberOnlyAvailable(daysAvailable.length - 1)
                    ];
                const nextCurrentDate = initDate + 1;

                daysAvailable.splice(daysAvailable.indexOf(initDate), 1);

                console.table(
                    initDate,
                    nextCurrentDate,
                    daysAvailable,
                    nextCurrentDate - initDate,
                );
                informations.push({
                    name: matter.subject,
                    start: `${new Date().getFullYear()}-${currentMonth}-${parseInt(
                        initDate.toString(),
                        10,
                    )}`,
                    end: `${new Date().getFullYear()}-${currentMonth}-${parseInt(
                        nextCurrentDate.toString(),
                        10,
                    ) - 1}`,
                });
            }
        });
    });
    return informations;
};

const numberOnlyAvailable = (width: number): number => {
    return Math.floor(Math.random() * width);
};

const availableDaysInArray = (month: number): number[] => {
    const availableDays: number[] = [];
    for (let c = 1; c <= captureDaysInMonth(month); c++) {
        availableDays.push(c);
    }
    return availableDays;
};
export default selectDatePerMatter;
