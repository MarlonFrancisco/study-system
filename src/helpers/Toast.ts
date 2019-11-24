export default class Toast {
    public static success(message: string, context: any, duration: number = 2000): void {
        context.$toasted.success(message, {
            duration,
        });
    }

    public static error(message: string, context: any, duration: number = 2000): void {
        context.$toasted.error(message, {
            duration,
        });
    }

    public static info(message: string, context: any, duration: number = 2000): void {
        context.$toasted.info(message, {
            duration,
        });
    }
}
