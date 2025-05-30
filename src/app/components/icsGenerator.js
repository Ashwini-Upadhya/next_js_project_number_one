const generateCalendarFile = () => {
    if (!date || !selectedTime) return;

    // Parse the selected time
    const [time, modifier] = selectedTime.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    // Create start and end dates
    const startDate = new Date(date);
    startDate.setHours(hours, minutes, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 15); // 15 minute meeting

    // Format dates for URLs (YYYYMMDDTHHmmssZ format)
    const formatUrlDate = (date) => {
        return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    // Create event details
    const title = encodeURIComponent("Consultation with Shakti Enterprise");
    const description = encodeURIComponent(
        `Thank you ${formData.firstName} ${formData.lastName} for scheduling a consultation with Shakti Enterprise. We look forward to speaking with you.`
    );
    const location = encodeURIComponent(selectedLocation);
    const start = formatUrlDate(startDate);
    const end = formatUrlDate(endDate);

    // Create calendar links
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${start}/${end}&text=${title}&details=${description}&location=${location}`;
    const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=${start}&enddt=${end}&subject=${title}&body=${description}&location=${location}`;
    const appleCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${start}%0ADTEND:${end}%0ASUMMARY:${title}%0ADESCRIPTION:${description}%0ALOCATION:${location}%0AEND:VEVENT%0AEND:VCALENDAR`;

    // Create a modal or dropdown to let the user choose their calendar
    const shouldUseDropdown = window.confirm(
        "Would you like to open the event in your calendar? Click OK to choose a calendar service or Cancel to download the ICS file."
    );

    if (shouldUseDropdown) {
        const userChoice = prompt(
            "Choose your calendar service:\n1. Google Calendar\n2. Outlook\n3. Apple Calendar\n\nEnter 1, 2, or 3:"
        );

        switch (userChoice) {
            case "1":
                window.open(googleCalendarUrl, "_blank");
                break;
            case "2":
                window.open(outlookCalendarUrl, "_blank");
                break;
            case "3":
                window.location.href = appleCalendarUrl;
                break;
            default:
                // Fall back to ICS download if invalid choice
                downloadICSFile(startDate, endDate);
                break;
        }
    } else {
        downloadICSFile(startDate, endDate);
    }
};

const downloadICSFile = (startDate, endDate) => {
    // Format dates for iCalendar
    const formatICSDate = (date) => {
        return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    // Create the iCalendar content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Shakti Enterprise//Consultation//EN
BEGIN:VEVENT
UID:${Date.now()}@shakti-enterprise.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:Consultation with Shakti Enterprise
DESCRIPTION:Thank you ${formData.firstName} ${formData.lastName} for scheduling a consultation with Shakti Enterprise. We look forward to speaking with you.
LOCATION:${selectedLocation}
END:VEVENT
END:VCALENDAR`.trim();

    // Create and download the file
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "shakti-consultation.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};