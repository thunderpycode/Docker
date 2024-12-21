import pymongo
import pandas as pd
from openpyxl import Workbook

# MongoDB connection configuration
mongo_client = pymongo.MongoClient("mongodb://localhost:27017/")  # Adjust connection string as needed
database_name = "myapp"  # Replace with your database name
collection_name = "users"  # Replace with your collection name

# Retrieve data from MongoDB
db = mongo_client[database_name]
collection = db[collection_name]
documents = list(collection.find({}))

# Convert MongoDB data to a Pandas DataFrame
# Exclude MongoDB-specific '_id' for readability in Excel. You can include it if needed.
data = [
    {
        "Full Name": doc.get("fullName", ""),
        "Email": doc.get("email", ""),
        "Employee ID": doc.get("employeeId", ""),
        "Service Line": doc.get("serviceLine", ""),
        "Tech Stack": doc.get("techStack", ""),
    }
    for doc in documents
]
df = pd.DataFrame(data)

# Save the data to an Excel file
excel_file_name = "employee_data.xlsx"
df.to_excel(excel_file_name, index=False, engine="openpyxl")

print(f"Excel file '{excel_file_name}' created successfully.")
