function formatDate(dateStr) {

    if (!dateStr) return "";

    if (dateStr.includes("/")) {

        const parts = dateStr.split("/");

        const d = new Date(
            parts[2],
            parts[1] - 1,
            parts[0]
        );

        return d.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }

    const d = new Date(dateStr);

    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
