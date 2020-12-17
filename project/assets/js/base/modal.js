var modal = {
    success: function (msg, title) {
        $('body').append(`<div class="alert">
        <div class="card">
            <div class="success-checkmark">
                <div class="check-icon">
                    <span class="icon-line line-tip"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                </div>
            </div>
            <h2>${title}</h2>
            <p>${msg}</p>
            <button onclick="modal.close()">Ok</button>
        </div>
    </div>`);
    },
    error: function (msg, title) {
        $('body').append(`<div class="alert">
        <div class="card">
            <div class="error-banmark">
                <div class="ban-icon">
                    <span class="icon-line line-long-invert"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                </div>
            </div>
            <h2>${title}</h2>
            <p>${msg}</p>
            <button onclick="modal.close()">Ok</button>
        </div>
    </div>`);
    },
    close: function () {
        $('.alert').remove();
    }
};