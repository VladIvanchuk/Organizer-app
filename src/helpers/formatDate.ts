import { format, parseISO } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const formatDate = (date: string) => {
    const result = format(
        parseISO(date),
        'd MMM yyyy',
        { locale: ru },
    );

    return result;
};
