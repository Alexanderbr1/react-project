import { FC } from "react";
import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

interface IPdfTemplateProps {
  name: string;
  picture: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfTemplate: FC<IPdfTemplateProps> = ({ name, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>

        <View style={styles.section}>{picture && <Image src={picture[0]} />}</View>
      </Page>
    </Document>
  );
};

export default PdfTemplate;
