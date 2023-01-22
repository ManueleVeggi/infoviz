import pandas as pd
import collections
from pprint import pprint

def appendItem(cell, mainList):
    for el in str(cell).split(","):
        if el != 'The Metropolitan Museum of Art':
            mainList.append(str(el).strip())
    return mainList

metData = pd.read_csv("data_management/transfers.csv")
zeriData = pd.read_csv("data_management/draftIntegrated.csv")

zeriDealer = []

for idx, row in zeriData.iterrows():
    appendItem(row["receivers"], zeriDealer)
    lastSurrender = str(row["surrenders"]).split(",")[-1].strip()
    zeriDealer.append(lastSurrender)

zeriFreq = collections.Counter(zeriDealer)
zeriDealerDf = pd.DataFrame({"freq": zeriFreq})
print(zeriDealerDf)

print("\n", "======", "\n")

metDealer = []

for idx, row in metData.iterrows():
    appendItem(row["lastDealer"], metDealer)

metFreq = dict(collections.Counter(metDealer))
metDealerDf = pd.DataFrame.from_dict(metFreq, orient='index').reset_index().rename(columns={'index':'dealer', 0:'freq'})
print(metDealerDf)

artworks = metData[["Title", "ArtistAlphaSort", "Object End Date", "Object Number", "AccessionYear", "lastTransfer"]]

#Export
zeriDealerDf.to_csv("assets/dataForSite/exportCsv/zeridealer.csv")
metDealerDf.to_csv("assets/dataForSite/exportCsv/metdealer.csv")
artworks.to_csv("assets/dataForSite/exportCsv/metartworks.csv")