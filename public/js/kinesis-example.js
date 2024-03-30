// Configure Credentials to use Cognito
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:uuid-for-cognito'  // TODO: replace for dev/prod.
});

AWS.config.region = 'ap-northeast-1';
// We're going to partition Amazon Kinesis records based on an identity.
// We need to get credentials first, then attach our event listeners.
AWS.config.credentials.get(function(err) {
    // attach event listener
    if (err) {
        alert('Error retrieving credentials.');
        console.error(err);
        return;
    }
    // create Amazon Kinesis service object
    var kinesis = new AWS.Kinesis({
        apiVersion: '2013-12-02'
    });

    var datestring = (date)=> {
        return 
    }

    // Get the ID of the Web page element.
    var doc = document.documentElement || document.body;

    // Get Scrollable height
    var scrollableHeight = doc.clientHeight;

    var recordData = [];
    var TID = null;
    window.addEventListener('scroll', function(event) {
        clearTimeout(TID);
        // Prevent creating a record while a user is actively scrolling
        TID = setTimeout(function() {
            // calculate percentage
            var scrollableElement = doc;
            var scrollHeight = scrollableElement.scrollHeight;  // body full height.
            var scrollTop = scrollableElement.scrollTop;  // current scroll position from top.

            var scrollTopPercentage = Math.round((scrollTop / scrollHeight) * 100);
            var scrollBottomPercentage = Math.round(((scrollTop + scrollableHeight) / scrollHeight) * 100);

            // Create the Amazon Kinesis record
            var date = new Date();
            date = date.toISOString().replace('T', ' ').slice(0, 19)  // convert to "yyyy-mm-dd HH:MM:SS" format. 
            var record = {
                Data: JSON.stringify({
                    uri: window.location.href,
                    scrollTopPercentage: scrollTopPercentage,
                    scrollBottomPercentage: scrollBottomPercentage,
                    datetime: date
                }),
                PartitionKey: 'partition-' + AWS.config.credentials.identityId
            };
            recordData.push(record);
        }, 100);
    });

    // upload data to Amazon Kinesis every second if data exists
    setInterval(function() {
        if (!recordData.length) {
            return;
        }
        // upload data to Amazon Kinesis
        kinesis.putRecords({
            Records: recordData,
            StreamName: 'sandbox'
        }, function(err, data) {
            if (err) {
                console.error(err);
            }
        });
        // clear record data
        recordData = [];
    }, 1000);
});
