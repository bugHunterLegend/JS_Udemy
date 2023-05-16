public String addThousandsSeparators(String value) {
    if (value.contains(".") & value.contains(",")) {
        for (int i = 0; i < value.length(); i++) {
            if (value.charAt(i) == ',') {
                value = value.replace(",", ".");
                break;
            } else if (value.charAt(i) == '.') {
                break;
            }
        }
    }
        value = value.replace(".", "");
        int rawValue = Integer.parseInt(parseData(value));
        String valueWithSeparator = format("%,d", rawValue);
        valueWithSeparator = valueWithSeparator.replace(",", ".");
        return valueWithSeparator;
}