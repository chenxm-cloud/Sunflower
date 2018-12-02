import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSetMetaData;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.sql.ResultSet;

public class Sqler {

    private String url;
    private String user;
    private String pwd;

    public Sqler(String url, String user, String pwd) {
        try {
            // 加载驱动程序
            Class.forName("com.mysql.jdbc.Driver");
            // 保存配置
            this.url = url;
            this.user = user;
            this.pwd = pwd;
            // 创建Statement\PreparedStatement对象
        } catch (Exception e) {
            System.err.println(e);
        }
    }

    // 查询
    public List<Object> select(String tableName) {
        ArrayList<Object> list = new ArrayList<Object>();
        try {
            // 获取数据库连接
            Connection conn = DriverManager.getConnection(this.url, this.user, this.pwd);
            // sql语句
            String sql = "select * from  " + tableName;
            // 预编译SQL，减少sql执行
            PreparedStatement ptmt = conn.prepareStatement(sql);
            // 执行
            ResultSet result = ptmt.executeQuery();
            ResultSetMetaData metaData = result.getMetaData(); // 获得结果集结构信息,元数据
            int columnCount = metaData.getColumnCount(); // 获得列数
            while (result.next()) {
                Map<String, Object> rowData = new HashMap<String, Object>();
                for (int i = 1; i <= columnCount; i++) {
                    rowData.put(metaData.getColumnName(i), result.getObject(i));
                }
                list.add(rowData);
            }
        } catch (Exception e) {
            System.err.println(e);
        }
        return list;
    }
}