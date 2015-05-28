(function (H) {

    var timerId;

    H.wrap(H.Tooltip.prototype, 'refresh', function (proceed) {


        var point = arguments[1];
        var chart = this.chart;
        var tooltip = this;
        var refreshArguments = arguments;
        var delayForDisplay = chart.options.tooltip.delayForDisplay;

        if (timerId) {
            clearTimeout(timerId);
        }

        if (delayForDisplay) {
            timerId = window.setTimeout(function () {

                //if (point === chart.hoverPoint || $.inArray(chart.hoverPoint, point) > -1) {
                if (point === chart.hoverPoint) {
                    proceed.apply(tooltip, Array.prototype.slice.call(refreshArguments, 1));
                }

            }, delayForDisplay || 1000);
        } else {
            proceed.apply(tooltip, Array.prototype.slice.call(refreshArguments, 1));
        }

    });

}(Highcharts));
