export default function alertError({
    divAlertError
}) {

    function open() {
        divAlertError.classList.add('open')
    };

    function close() {
        divAlertError.classList.remove('open')
    };

    return {
        open,
        close
    };
}