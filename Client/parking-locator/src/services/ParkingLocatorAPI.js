export async function getAvilableSlots(locationId) {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    //replacewith serverurl and pass locationid as a parameter
    const serverUrl = ""

    try {
      const response = await fetch(
        serverUrl,
        requestOptions
      );
  
      return response.json();
    } catch (e) {
      throw new Error("Error getting availablelocations");
    }
  }