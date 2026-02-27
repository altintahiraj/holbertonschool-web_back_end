-- Lists Glam rock bands ranked by longevity up to 2024

SELECT
    band_name,
    (2024 - formed) - IFNULL(split - formed, 0) AS lifespan
FROM
    metal_bands
WHERE
    main_style = 'Glam rock'
ORDER BY
    lifespan DESC;