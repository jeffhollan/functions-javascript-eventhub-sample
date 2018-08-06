module.exports = async function (context, myEvents) {
    context.log(`JavaScript function triggered on Event Hubs batch with size: ${myEvents.length}`);
    
    myEvents.forEach(function(e) {
        context.log(`Event data: ${JSON.stringify(e)}`);
    });
};