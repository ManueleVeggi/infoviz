import networkx as nx
import matplotlib.pyplot as plt
import pandas as pd

G = nx.DiGraph()

csvData = pd.read_csv("data_management/firstExp/draftIntegrated.csv")
csvDataRefined = csvData.drop([0,15,23], axis=0)
#networkEmb = pd.DataFrame()

for i, row in csvDataRefined.iterrows():
    arcs = []
    listInst = row["receivers"].split(",")
    for idx, el in enumerate(listInst):
        if idx < len(listInst)-1:
            transfer = (el,listInst[idx+1])
            arcs.append(transfer)
        else:
            arcs.append((el, row["surrenders"].split(",")[-1]))
    G.add_edges_from(arcs)

print(G.edges)
nx.write_gexf(G, "data_management/firstExp/metzeri.gexf")
nx.draw_networkx(G)
plt.show()

