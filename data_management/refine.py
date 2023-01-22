import pandas as pd

csv = pd.read_csv("data_management/transferRaw.csv")

for idx, row in csv.iterrows():
    dealer = row["agentsTransfer"]
    if "Collection," in str(dealer):
        dealerList = str(dealer).split(", ")
        csv.at[idx, "lastDealer"] = dealerList[1]
        print(dealerList[1])
    else:
        csv.at[idx, "lastDealer"] = dealer
        print(dealer)
csv.to_csv("data_management/transfers.csv")