import React from 'react';
import Head from 'next/head';

export const Meta: React.SFC<{}> = () => {
    return <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
    </Head>;
};

export default Meta;
