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
): IMattersAndHours[][] => {
    const hours = 24;
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
): IEvent[] => {
    const mattersAndHours = determineDaysForStudyPerMatter(
        dificulties,
        matters,
    );
    const informations: IEvent[] = [];
    let currentDate = 1;
    mattersAndHours.map((matterAndHour, index) => {
        matterAndHour.map((matter) => {
            const initDate = currentDate;
            const nextCurrentDate = currentDate + matter.days;
            currentDate = nextCurrentDate;
            informations.push({
                name: matter.subject,
                start: `${new Date().getFullYear()}-${index + 1}-${parseInt(
                    initDate.toString(),
                    10,
                )}`,
                end: `${new Date().getFullYear()}-${index + 1}-${parseInt(
                    nextCurrentDate.toString(),
                    10,
                ) - 1}`,
            });
        });

        currentDate = 1;
    });

    return informations;
};
export default selectDatePerMatter;
