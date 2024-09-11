//QUIET TIMES

async function activityTable(day) {
    let logFileList = await textFile("camera_logs.txt");
    let logFiles = logFileList.split("\n");
    
    let activityArray = Array(24).fill(0);
    
    for (let logFile of logFiles) {
        let logContent = await textFile(logFile);
        let timestamps = logContent.split("\n");
        
        for (let timestamp of timestamps) {
            if (timestamp) {
                let date = new Date(parseInt(timestamp));
                if (date.getDay() === day) {
                    activityArray[date.getHours()]++;
                }
            }
        }
    }
    
    return activityArray;
}
activityTable(1).then(table => console.log(activityGraph(table)));
