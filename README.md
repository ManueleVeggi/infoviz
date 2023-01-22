# Nice to MET you

**More than five hundreds Italian painting are now exhibited at Metropolitan Museum of Art, New York. What's the history behind these journeys?**

Final Project of "Information Visualisation" (Prof. Marilena Daquino) at University of Bologna, MA "Digital Humanities and Digital Knowledge" (a.y. 2022/2023)

## Main outcomes

- Final website is available at the following [link](https://manueleveggi.github.io/infoviz/)
- Data analysis, manipulation and visualization are described in the following [documentation]()
- To extract relevant information, source datasets (see below) have been modified through pandas library (Python). The output csv files are available here: 
  - [[1]]() mashes up the content of MET Open Access CSV with the result of the query on Zeri&LODE dataset 
  - [[2]](https://github.com/ManueleVeggi/infoviz/blob/8c167835b30a3f6009dc1050b2c8b3e8b0d91565/data_management/transfers.csv) streamlines the manipulation of the content of the column "Credit line" (MET Dataset)

## Team members and statement of responsibility

All members of the teams worked together in the definition of the focal domain of interest, in the retrieval of source data and in the final revision. The core parts of the workflow were divided as follows:  

| Team member                                                         | Section            |
|---------------------------------------------------------------------|--------------------|
| [Ghasempouri Ali](mailto:seyedali.ghasempouri@studio.unibo.it)      | Data Visualization |
| [Giacomini Sebastiano](mailto:sebastiano.giacomini@studio.unibo.it) | Data Analysis and Manipulation |
| [Veggi Manuele](mailto:manuele.veggi@studio.unibo.it)               | Web Communication  |


## References

### Source datasets

Two main datasets have beel used

- The Metropolitan Museum of Art Open Access CSV, [link](https://github.com/metmuseum/openaccess/blob/master/MetObjects.csv)
- Zeri&LODE RDF Datasets, [link](http://data.fondazionezeri.unibo.it/)

### Bibliography and online resources

The main references publications for the website are the catalog written by Zeri for the collection of Italian painting at MET:

Zeri Z. and E. Gardner. <i>Italian Paintings. A Catalogue of the Collection of
The Metropolitan Museum of Art</i>. Vicenza: Neri Pozza.

| Volume no. | Title| Year | Online resource  |
|------------|------|------|------------------|
| 1          | Florentine School                  | 1971 | [Link](https://www.metmuseum.org/art/metpublications/italian_paintings_a_catalogue_of_the_collection_of_the_metropolitan_museum_of_art_vol_1_florentin)      |
| 2          | Venetian School                    | 1973 | [Link](http://www.metmuseum.org/art/metpublications/italian_paintings_a_catalogue_of_the_collection_of_the_metropolitan_museum_of_art_vol_2_venetian_school) |
| 3          | Sienese and Central Italian School | 1986 | [Link](https://www.metmuseum.org/art/metpublications/italian_paintings_a_catalogue_of_the_collection_of_the_metropolitan_museum_of_art_vol_3_sienese_a)      |
| 4          | North Italian School               | 1986 | [Link](https://www.metmuseum.org/art/metpublications/Italian_Paintings_A_Catalogue_of_the_Collection_of_The_Metropolitan_Museum_of_Art_Vol_4_North_Ita)      |

Other relevant resources have been:

- <i>Thomas J. Watson Library Digital Collections</i>, The Metropolitan Museum of Art ([link](https://www.metmuseum.org/art/libraries-and-research-centers/watson-digital-collections)).
- <i>Grange-Blanche, Louise Labé et Pierre-Toussaint de Chazelles</i>, website of the municipality of Parcieux ([link](https://www.parcieux.fr/Grange-Blanche-Louise-Labe-et-Pierre-Toussaint-de-Chazelles.html?lang=fr)).
- Cheney, Iris H. <i>Notes on Jacopino del Conte</i>. "Art Bulletin" 52 (March 1970), 1970.
- Corso, M. <i>Jacopino del Conte nel contesto artistico romano tra gli anni trenta e gli anni cinquanta del Cinquecento</i>. PhD diss., Università degli Studi Roma Tre, 2014.
- Privitera, M. <i>Girolamo Macchietti : un pittore dello Studiolo di Francesco I. (Firenze 1535-1592)</i>. Milan: Jandi Sapi editori, 1966.
- Salinger, M. <i>A Portrait of a Knight of Malta</i>. "The Metropolitan Museum of Art Bulletin", vol. 2, no. 5, 1944, pp. 164–65. ([JSTOR](https://doi.org/10.2307/3257124)).
- Vasari, G. <i>Le vite dei più eccellenti pittori, scultori e architetti</i>. Guttemberg, 1876 ([link](https://books.google.it/books?hl=it&lr=&id=97PcyE3ksa4C&oi=fnd&pg=PA3&dq=vasari+vite&ots=m6DvwRDKtZ&sig=4-wbsqnw-NrFU_dCCeNVQzTeEz8&redir_esc=y#v=onepage&q=vasari%20vite&f=false)).

As the historical and biographical reconstructions of main European and US art dealers is still ongoing by scholars, not always bibliographical resources were founded. The main pieces of information about the dealers are hence coming from the online articles published by the Metropolitan Museum of Art and, in the worst scenarios, from online encyclopedias (Wikipedia). 

### Templates and libraries

Used website template is available [here](https://github.com/BuckyMaler/global) and the layout was edited through [Bootstrap v 5.0.2](https://getbootstrap.com/).

Visualizations and multimedia content presentations are created through the following libraries:
- [Google Charts](https://developers.google.com/chart)
- [Leaflet](https://leafletjs.com/)
- [StoryMap - KnightLab](https://storymap.knightlab.com/)

> Please note that to correctly visualize the assets included in the website **the used browser should enable mixed content**. As suggestion, read the following [tutorial](https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=it). 

## License

Shield: [![CC BY 4.0][cc-by-shield]][cc-by]

If not stated otherwise, this work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

See [caveat](assets/zeriLetters/CopyrightLetters.md) for the reuse of some assets included in this repository and in the associated webpage.
